const GP = {
    A: 4,
    "A-": 3.7,
    "B+": 3.5,
    B: 3,
    "C+": 2.5,
    C: 2,
    "D+": 1.5,
    D: 1,
    F: 0,
};

const $ = (id) => document.getElementById(id);

document.addEventListener("DOMContentLoaded", function () {
    const fileInput = $("fileInput");
    if (fileInput) {
        fileInput.addEventListener("change", async (e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            try {
                const json = JSON.parse(await file.text());
                render(json, file.name);
            } catch (err) {
                alert("Failed to load JSON: " + err.message);
            }
        });
    }
});

function render(data, sourceName) {
    if ($("student_name")) $("student_name").value = data.student_name ?? "";
    if ($("student_id")) $("student_id").value = data.student_id ?? "";
    if ($("date_of_birth")) $("date_of_birth").value = data.date_of_birth ?? "";
    if ($("date_of_graduation"))
        $("date_of_graduation").value = data.date_of_graduation ?? "";
    if ($("date_of_admission"))
        $("date_of_admission").value = data.date_of_admission ?? "";
    if ($("degree")) $("degree").value = data.degree ?? "";
    if ($("major")) $("major").value = data.major ?? "";

    const tbody = $("content_body");
    if (!tbody) {
        console.error("Could not find tbody element");
        return;
    }

    tbody.innerHTML = "";

    if (!data.credit || typeof data.credit !== "object") {
        alert('No "credit" object found in the JSON.');
        return;
    }

    const years = Object.keys(data.credit).sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true })
    );

    let totalCredits = 0,
        totalPoints = 0,
        skipped = 0;

    for (const year of years) {
        const semesters = Object.keys(data.credit[year]).sort((a, b) =>
            a.localeCompare(b, undefined, { numeric: true })
        );

        for (const sem of semesters) {
            addRow(
                `<td colspan="3" style="text-align: left; font-weight: bold;">${sem}, ${year}</td>`
            );

            let semCredits = 0,
                semPoints = 0;

            for (const c of data.credit[year][sem]) {
                const credit = Number(c.credit);
                const grade = String(c.grade ?? "")
                    .toUpperCase()
                    .trim();
                const gp = GP.hasOwnProperty(grade)
                    ? GP[grade]
                    : isFinite(+grade)
                    ? +grade
                    : null;

                addRow(`
                    <td style="text-align: left;">${escape(
                        `${c.subject_id ?? ""} ${c.name ?? ""}`
                    )}</td>
                    <td style="text-align: center;">${
                        Number.isFinite(credit) ? credit : ""
                    }</td>
                    <td style="text-align: center;">${escape(grade)}</td>
                `);

                if (Number.isFinite(credit) && gp !== null) {
                    semCredits += credit;
                    semPoints += credit * gp;
                } else if (gp === null) {
                    skipped++;
                }
            }

            const gps = semCredits ? semPoints / semCredits : null;

            totalCredits += semCredits;
            totalPoints += semPoints;
            const gpaToDate = totalCredits ? totalPoints / totalCredits : null;

            addRow(
                `<td colspan="3" style="text-align: left; font-style: italic; background-color: #f5f5f5;">GPS: ${
                    gps !== null ? gps.toFixed(2) : "—"
                } &nbsp;&nbsp; GPA: ${
                    gpaToDate !== null ? gpaToDate.toFixed(2) : "—"
                }</td>`
            );
        }
    }

    const finalGPA = totalCredits
        ? (totalPoints / totalCredits).toFixed(2)
        : "—";
    addRow(
        `<td colspan="3" style="text-align: left; font-weight: bold; background-color: #e0e0e0;">Overall GPA: ${finalGPA} &nbsp; • &nbsp; Credits: ${totalCredits} &nbsp; • &nbsp; Points: ${totalPoints.toFixed(
            2
        )}</td>`
    );

    if (skipped) {
        addRow(
            `<td colspan="3" style="text-align: left; font-style: italic;">Note: ${skipped} course(s) ignored due to unknown grade.</td>`
        );
    }

    function addRow(html) {
        const tr = document.createElement("tr");
        tr.innerHTML = html;
        tbody.appendChild(tr);
    }
}

function escape(s) {
    return String(s).replace(
        /[&<>\"']/g,
        (m) =>
            ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
            }[m])
    );
}
