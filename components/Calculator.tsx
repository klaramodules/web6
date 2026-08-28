"use client";

import { useMemo, useState } from "react";

export default function RentVsOwnCalculator() {
  const [cost, setCost] = useState(100000);
  const [downPayment, setDownPayment] = useState(5000);
  const [interestRate, setInterestRate] = useState(4);
  const [monthlyBudget, setMonthlyBudget] = useState(700);
  const [rent, setRent] = useState(750);

  const loanAmount = Math.max(cost - downPayment, 0);
  const monthlyRate = interestRate / 100 / 12;

  /*
   * Calculate how long the loan takes to repay
   * using the user's chosen monthly budget.
   */
  const loanCalculation = useMemo(() => {
    if (loanAmount === 0) {
      return {
        months: 0,
        totalLoanCost: 0,
        totalInterest: 0,
        valid: true,
      };
    }

    if (monthlyRate === 0) {
      const months = Math.ceil(loanAmount / monthlyBudget);

      return {
        months,
        totalLoanCost:
          loanAmount +
          Math.max(months * monthlyBudget - loanAmount, 0),
        totalInterest: 0,
        valid: true,
      };
    }

    /*
     * If the monthly payment is not enough to cover
     * the interest, the loan can never be repaid.
     */
    const firstMonthInterest = loanAmount * monthlyRate;

    if (monthlyBudget <= firstMonthInterest) {
      return {
        months: 0,
        totalLoanCost: 0,
        totalInterest: 0,
        valid: false,
      };
    }

    let balance = loanAmount;
    let months = 0;
    let totalPaid = 0;

    while (balance > 0 && months < 1200) {
      const interest = balance * monthlyRate;
      const payment = Math.min(
        monthlyBudget,
        balance + interest
      );

      balance -= payment - interest;
      totalPaid += payment;
      months += 1;
    }

    const totalInterest = Math.max(
      totalPaid - loanAmount,
      0
    );

    return {
      months,
      totalLoanCost: totalPaid,
      totalInterest,
      valid: balance <= 0,
    };
  }, [loanAmount, monthlyRate, monthlyBudget]);

  const repaymentYears =
    loanCalculation.months > 0
      ? Math.floor(loanCalculation.months / 12)
      : 0;

  const repaymentMonths =
    loanCalculation.months > 0
      ? loanCalculation.months % 12
      : 0;

  const repaymentLabel =
    repaymentYears > 0 && repaymentMonths > 0
      ? `${repaymentYears} years ${repaymentMonths} months`
      : repaymentYears > 0
        ? `${repaymentYears} years`
        : `${repaymentMonths} months`;

  /*
   * Build yearly data for the chart and milestones.
   */
  const yearlyData = useMemo(() => {
    let balance = loanAmount;

    const data = [
      {
        year: 0,
        balance,
        equity: Math.max(cost - balance, 0),
        rentPaid: 0,
        loanCostPaid: 0,
      },
    ];

    let totalPaid = 0;

    for (let year = 1; year <= 30; year++) {
      for (let month = 0; month < 12; month++) {
        if (balance <= 0) break;

        const interest =
          monthlyRate === 0
            ? 0
            : balance * monthlyRate;

        const payment = Math.min(
          monthlyBudget,
          balance + interest
        );

        balance -= payment - interest;
        totalPaid += payment;
      }

      const equity = cost - Math.max(balance, 0);
      const rentPaid = rent * 12 * year;

      data.push({
        year,
        balance: Math.max(balance, 0),
        equity: Math.max(equity, 0),
        rentPaid,
        loanCostPaid: totalPaid,
      });

      if (balance <= 0) break;
    }

    return data;
  }, [
    cost,
    loanAmount,
    monthlyRate,
    monthlyBudget,
    rent,
  ]);

  const milestones = [5, 10, 15].filter(
    (year) =>
      yearlyData.some((item) => item.year === year)
  );

  const formatEuro = (value: number) =>
    `€${Math.round(value).toLocaleString("en-US")}`;

  const maxValue = Math.max(
    cost,
    ...yearlyData.map((item) => item.rentPaid),
    1
  );

  const chartWidth = 800;
  const chartHeight = 360;

  const paddingLeft = 60;
  const paddingRight = 20;
  const paddingTop = 25;
  const paddingBottom = 45;

  const plotWidth =
    chartWidth - paddingLeft - paddingRight;

  const plotHeight =
    chartHeight - paddingTop - paddingBottom;

  const maxYear =
    yearlyData[yearlyData.length - 1]?.year || 1;

  const getX = (year: number) =>
    paddingLeft +
    (year / maxYear) * plotWidth;

  const getY = (value: number) =>
    paddingTop +
    plotHeight -
    (value / maxValue) * plotHeight;

  const createPath = (
    key: "equity" | "rentPaid"
  ) => {
    return yearlyData
      .map((item, index) => {
        const x = getX(item.year);
        const y = getY(item[key]);

        return `${index === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
  };

  return (
    <div className="my-12 overflow-hidden rounded-sm border border-[#d8d2c5] bg-[#f5f0e6]">

      {/* INTRODUCTION */}

      <div className="p-6 md:p-10">
        <div>
          <h2 className="text-2xl font-semibold text-[#2F3E2F] md:text-3xl">
            Rent vs. Own
          </h2>

          <p className="mt-2 max-w-2xl text-[#5a5a50]">
            Adjust the monthly amount you are comfortable
            paying and see what ownership could look like
            over time.
          </p>
        </div>
      </div>


      {/* CHART */}

      <div className="px-4 pb-8 md:px-10">

        <div className="w-full overflow-x-auto">

          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="min-w-[650px] w-full"
            role="img"
            aria-label="Chart comparing home equity with cumulative rent paid"
          >

            {[0, 0.25, 0.5, 0.75, 1].map(
              (value) => {
                const y = getY(maxValue * value);

                return (
                  <g key={value}>

                    <line
                      x1={paddingLeft}
                      x2={chartWidth - paddingRight}
                      y1={y}
                      y2={y}
                      stroke="#d8d2c5"
                      strokeWidth="1"
                    />

                    <text
                      x={paddingLeft - 10}
                      y={y + 4}
                      textAnchor="end"
                      fontSize="11"
                      fill="#6b6b60"
                    >
                      {formatEuro(maxValue * value)}
                    </text>

                  </g>
                );
              }
            )}

            <path
              d={createPath("rentPaid")}
              fill="none"
              stroke="#8a8a7a"
              strokeWidth="3"
            />

            <path
              d={createPath("equity")}
              fill="none"
              stroke="#2F3E2F"
              strokeWidth="4"
            />

            {[0, 5, 10, 15, maxYear]
              .filter(
                (year, index, array) =>
                  year <= maxYear &&
                  array.indexOf(year) === index
              )
              .map((year) => (
                <text
                  key={year}
                  x={getX(year)}
                  y={chartHeight - 15}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#6b6b60"
                >
                  {year}y
                </text>
              ))}

          </svg>

        </div>

        <div className="mt-5 flex flex-wrap gap-6 text-sm text-[#5a5a50]">

          <div className="flex items-center gap-2">
            <span className="h-3 w-8 bg-[#2F3E2F]" />
            Home equity
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-8 bg-[#8a8a7a]" />
            Cumulative rent paid
          </div>

        </div>

      </div>


      {/* MAIN RESULTS */}

      <div className="border-t border-[#d8d2c5] p-6 md:p-10">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <p className="text-sm text-[#6b6b60]">
              Monthly loan cost
            </p>

            <p className="mt-1 text-2xl font-semibold text-[#2F3E2F]">
              {formatEuro(monthlyBudget)}
            </p>

            <p className="mt-1 text-xs text-[#6b6b60]">
              Principal + interest
            </p>
          </div>


          <div>
            <p className="text-sm text-[#6b6b60]">
              Loan amount
            </p>

            <p className="mt-1 text-2xl font-semibold text-[#2F3E2F]">
              {formatEuro(loanAmount)}
            </p>
          </div>


          <div>
            <p className="text-sm text-[#6b6b60]">
              Repayment time
            </p>

            <p className="mt-1 text-2xl font-semibold text-[#2F3E2F]">
              {loanCalculation.valid
                ? repaymentLabel
                : "Not possible"}
            </p>
          </div>


          <div>
            <p className="text-sm text-[#6b6b60]">
              Total loan cost
            </p>

            <p className="mt-1 text-2xl font-semibold text-[#2F3E2F]">
              {loanCalculation.valid
                ? formatEuro(loanCalculation.totalLoanCost)
                : "—"}
            </p>

            {loanCalculation.valid && (
              <p className="mt-1 text-xs text-[#6b6b60]">
                Including{" "}
                {formatEuro(loanCalculation.totalInterest)}{" "}
                interest
              </p>
            )}
          </div>

        </div>

      </div>


      {/* CALCULATOR */}

      <div className="border-t border-[#d8d2c5] px-6 py-8 md:px-10">

        <h3 className="mb-6 text-xl font-semibold text-[#2F3E2F]">
          Calculate your investment
        </h3>

        <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">

          {/* MONTHLY BUDGET */}

          <div>
            <label className="mb-2 block text-sm font-medium text-[#2F3E2F]">
              Monthly loan budget
            </label>

            <div className="flex items-center gap-4">

              <input
                type="range"
                min="500"
                max="2000"
                step="25"
                value={monthlyBudget}
                onChange={(e) =>
                  setMonthlyBudget(
                    Number(e.target.value)
                  )
                }
                className="w-full accent-[#2F3E2F]"
              />

              <span className="w-24 text-right font-semibold text-[#2F3E2F]">
                {formatEuro(monthlyBudget)}
              </span>

            </div>
          </div>


          {/* RENT */}

          <div>
            <label className="mb-2 block text-sm font-medium text-[#2F3E2F]">
              Monthly rent
            </label>

            <div className="flex items-center gap-4">

              <input
                type="range"
                min="400"
                max="1500"
                step="25"
                value={rent}
                onChange={(e) =>
                  setRent(Number(e.target.value))
                }
                className="w-full accent-[#2F3E2F]"
              />

              <span className="w-24 text-right font-semibold text-[#2F3E2F]">
                {formatEuro(rent)}
              </span>

            </div>
          </div>


          {/* HOME COST */}

          <div>
            <label className="mb-2 block text-sm font-medium text-[#2F3E2F]">
              Home & installation cost
            </label>

            <div className="flex items-center gap-4">

              <input
                type="range"
                min="50000"
                max="200000"
                step="5000"
                value={cost}
                onChange={(e) =>
                  setCost(Number(e.target.value))
                }
                className="w-full accent-[#2F3E2F]"
              />

              <span className="w-24 text-right font-semibold text-[#2F3E2F]">
                {formatEuro(cost)}
              </span>

            </div>
          </div>


          {/* DOWN PAYMENT */}

          <div>
            <label className="mb-2 block text-sm font-medium text-[#2F3E2F]">
              Down payment
            </label>

            <div className="flex items-center gap-4">

              <input
                type="range"
                min="0"
                max={Math.min(50000, cost)}
                step="5000"
                value={downPayment}
                onChange={(e) =>
                  setDownPayment(
                    Number(e.target.value)
                  )
                }
                className="w-full accent-[#2F3E2F]"
              />

              <span className="w-24 text-right font-semibold text-[#2F3E2F]">
                {formatEuro(downPayment)}
              </span>

            </div>
          </div>


          {/* INTEREST */}

          <div>

            <label className="mb-2 block text-sm font-medium text-[#2F3E2F]">
              Interest rate
            </label>

            <div className="flex items-center gap-4">

              <input
                type="range"
                min="0"
                max="10"
                step="0.1"
                value={interestRate}
                onChange={(e) =>
                  setInterestRate(
                    Number(e.target.value)
                  )
                }
                className="w-full accent-[#2F3E2F]"
              />

              <span className="w-24 text-right font-semibold text-[#2F3E2F]">
                {interestRate.toFixed(1)}%
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* MILESTONES */}

      <div className="border-t border-[#d8d2c5] p-6 md:p-10">

        <h3 className="mb-6 text-xl font-semibold text-[#2F3E2F]">
          What happens over time?
        </h3>

        <div className="grid gap-4 md:grid-cols-3">

          {milestones.map((year) => {

            const result = yearlyData.find(
              (item) => item.year === year
            );

            if (!result) return null;

            return (

              <div
                key={year}
                className="rounded-sm border border-[#d8d2c5] bg-white/30 p-5"
              >

                <p className="text-sm text-[#6b6b60]">
                  After {year} years
                </p>

                <p className="mt-2 text-2xl font-semibold text-[#2F3E2F]">
                  {formatEuro(result.equity)}
                </p>

                <p className="mt-1 text-sm text-[#6b6b60]">
                  home equity
                </p>

                <div className="mt-4 border-t border-[#d8d2c5] pt-4 text-sm">

                  <p className="text-[#6b6b60]">
                    Rent paid:{" "}
                    <span className="font-medium text-[#2F3E2F]">
                      {formatEuro(result.rentPaid)}
                    </span>
                  </p>

                  <p className="mt-1 text-[#6b6b60]">
                    Loan cost paid:{" "}
                    <span className="font-medium text-[#2F3E2F]">
                      {formatEuro(result.loanCostPaid)}
                    </span>
                  </p>

                  <p className="mt-1 text-[#6b6b60]">
                    Remaining loan:{" "}
                    <span className="font-medium text-[#2F3E2F]">
                      {formatEuro(result.balance)}
                    </span>
                  </p>

                </div>

              </div>

            );
          })}

        </div>

      </div>


      {/* DISCLAIMER */}

      <div className="border-t border-[#d8d2c5] px-6 py-5 md:px-10">

        <p className="text-xs leading-5 text-[#6b6b60]">
          Illustrative calculation only. This example assumes
          a fixed interest rate and does not include taxes,
          insurance, maintenance, utilities, transaction costs
          or changes in property value. Actual financing
          conditions vary.
        </p>

      </div>

    </div>
  );
}