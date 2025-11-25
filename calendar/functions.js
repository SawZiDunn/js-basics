function showMonthOf2025(m_of_year, total_days_of_year) {
    const days_of_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const monthYear = document.getElementById("monthYear");
    monthYear.textContent = `${monthNames[m_of_year - 1]}/2025`;

    const calendarBody = document.getElementById("calendarBody");
    calendarBody.innerHTML = "";

    let daysSinceJan1 = 0;
    for (let i = 0; i < m_of_year - 1; i++) {
        daysSinceJan1 += days_of_month[i];
    }

    const firstDayOfMonth = ((2 + daysSinceJan1) % 7) + 1;
    const adjustedFirstDay = firstDayOfMonth === 8 ? 1 : firstDayOfMonth;

    const daysInCurrentMonth = days_of_month[m_of_year - 1];
    const daysInPreviousMonth =
        m_of_year === 1 ? 31 : days_of_month[m_of_year - 2];

    let date = 1;
    let nextMonthDate = 1;

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDate = today.getDate();

    for (let week = 0; week < 6; week++) {
        const row = document.createElement("tr");

        for (let day = 1; day <= 7; day++) {
            const cell = document.createElement("td");

            if (week === 0 && day < adjustedFirstDay) {
                const prevDate =
                    daysInPreviousMonth - (adjustedFirstDay - day - 1);
                cell.textContent = prevDate;
                cell.classList.add("other-month");
            } else if (date <= daysInCurrentMonth) {
                cell.textContent = date;

                if (
                    todayYear === 2025 &&
                    todayMonth === m_of_year &&
                    todayDate === date
                ) {
                    cell.classList.add("today");
                }

                date++;
            } else {
                cell.textContent = nextMonthDate;
                cell.classList.add("other-month");
                nextMonthDate++;
            }

            row.appendChild(cell);
        }

        calendarBody.appendChild(row);

        if (date > daysInCurrentMonth && day === 7) {
            break;
        }
    }
}
