document.getElementById("marksForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get marks from the form inputs
    const subject1 = parseFloat(document.getElementById("subject1").value);
    const subject2 = parseFloat(document.getElementById("subject2").value);
    const subject3 = parseFloat(document.getElementById("subject3").value);
    const subject4 = parseFloat(document.getElementById("subject4").value);
    const subject5 = parseFloat(document.getElementById("subject5").value);

    // Convert marks to grade points (example scale)
    const gradePoints = [
        convertMarksToGrade(subject1),
        convertMarksToGrade(subject2),
        convertMarksToGrade(subject3),
        convertMarksToGrade(subject4),
        convertMarksToGrade(subject5)
    ];

    // Calculate SGPA
    const totalGradePoints = gradePoints.reduce((acc, point) => acc + point, 0);
    const SGPA = totalGradePoints / gradePoints.length;

    // Calculate CGPA (for simplicity assuming 1 semester)
    const CGPA = SGPA; // Since we're just calculating for one semester

    // Calculate percentage
    const percentage = SGPA * 10;

    // Display the results
    document.getElementById("sgpaResult").textContent = `SGPA: ${SGPA.toFixed(2)}`;
    document.getElementById("cgpaResult").textContent = `CGPA: ${CGPA.toFixed(2)}`;
    document.getElementById("percentageResult").textContent = `Percentage: ${percentage.toFixed(2)}%`;
});

function convertMarksToGrade(marks) {
    if (marks >= 90) {
        return 10;
    } else if (marks >= 80) {
        return 9;
    } else if (marks >= 70) {
        return 8;
    } else if (marks >= 60) {
        return 7;
    } else if (marks >= 50) {
        return 6;
    } else if (marks >= 40) {
        return 5;
    } else {
        return 0; // Fail
    }
}
