function courses(req, res) {
    res.send("All Courses");
}

function courseById(req, res) {
    res.send("1 random course... doesn't matter what you learn really...");
}

module.exports = {
    courses,
    courseById
}