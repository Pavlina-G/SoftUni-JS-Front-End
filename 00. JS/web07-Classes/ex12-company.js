class Company {

    constructor() {
        this.departments = new Map();
    }
    addEmployee(username, salary, position, department) {

        if (!username || !salary || salary < 0 || !position || !department) {
            throw new Error("Invalid input!");
        }

        let newEmployee = { username, salary, position, department };

        if (this.departments.has(department)) {
            this.departments.get(department).push(newEmployee);
        } else {
            this.departments.set(department, [newEmployee]);
        }

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }


    bestDepartment() {
        const departmentMaxSalary = []

        for (let d of this.departments) {

            let totalSalary = 0;
            d[1].forEach(dep => totalSalary += dep.salary);
            let averageSalary = totalSalary / d[1].length;
            departmentMaxSalary[d[0]] = averageSalary.toFixed(2);

        }

        let bestDepartment = Object.entries(departmentMaxSalary).sort((a, b) => b[1] - a[1])[0][0]

        let sortBySalaryAndName = this.departments.get(bestDepartment)
            .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));

        let result = `Best Department is: ${bestDepartment}\n`;
        result += `Average salary: ${departmentMaxSalary[bestDepartment]}\n`;
        sortBySalaryAndName.forEach(e => result += `${e.username} ${e.salary} ${e.position}\n`);

        return result.trim();
    }
}

let c = new Company();
c.addEmployee("Stamat", 2000, "engineer", "Construction");
c.addEmployee("Peter", 1500, "electrical engineer", "Construction");
c.addEmployee("Martin", 500, "cleaner", "Construction");
c.addEmployee("Stanley", 2000, "architect", "Construction");
c.addEmployee("Stamat", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Peter", 1000, "graphical designer", "Marketing");
c.addEmployee("George", 1350, "HR", "Human resources");
console.log(c.bestDepartment());