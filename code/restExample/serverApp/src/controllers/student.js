function students(req, res) {
    res.send("All Students");
}

function studentById(req, res) {
    res.send("1 Guy... Maybe Ringo.. Maybe some other rando!!!");
}

module.exports = {
    students,
    studentById
}