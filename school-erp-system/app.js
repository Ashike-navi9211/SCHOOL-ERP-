
// School ERP System - Complete JavaScript Implementation

// Sample data initialization
const sampleData = {
  "roles": ["owner", "admin", "teacher", "student", "parent"],
  "sampleUsers": {
    "owner": [
      {"id": "OWN001", "username": "owner", "password": "owner123", "name": "System Owner", "email": "owner@school.com"}
    ],
    "admin": [
      {"id": "ADM001", "username": "admin1", "password": "admin123", "name": "John Admin", "email": "john.admin@school.com"},
      {"id": "ADM002", "username": "admin2", "password": "admin123", "name": "Sarah Admin", "email": "sarah.admin@school.com"}
    ],
    "teacher": [
      {"id": "TCH001", "username": "teacher1", "password": "teach123", "name": "Michael Johnson", "email": "m.johnson@school.com", "subject": "Mathematics", "classes": ["10A", "10B"]},
      {"id": "TCH002", "username": "teacher2", "password": "teach123", "name": "Emily Davis", "email": "e.davis@school.com", "subject": "English", "classes": ["10A", "9A"]},
      {"id": "TCH003", "username": "teacher3", "password": "teach123", "name": "Robert Wilson", "email": "r.wilson@school.com", "subject": "Science", "classes": ["10B", "9B"]},
      {"id": "TCH004", "username": "teacher4", "password": "teach123", "name": "Lisa Brown", "email": "l.brown@school.com", "subject": "History", "classes": ["9A", "9B"]}
    ],
    "student": [
      {"id": "STU001", "username": "student1", "password": "stud123", "name": "Alex Smith", "email": "alex.smith@student.com", "class": "10A", "rollNo": "101", "parentId": "PAR001"},
      {"id": "STU002", "username": "student2", "password": "stud123", "name": "Emma Wilson", "email": "emma.wilson@student.com", "class": "10A", "rollNo": "102", "parentId": "PAR002"},
      {"id": "STU003", "username": "student3", "password": "stud123", "name": "James Brown", "email": "james.brown@student.com", "class": "10B", "rollNo": "103", "parentId": "PAR003"},
      {"id": "STU004", "username": "student4", "password": "stud123", "name": "Sophia Davis", "email": "sophia.davis@student.com", "class": "10B", "rollNo": "104", "parentId": "PAR004"},
      {"id": "STU005", "username": "student5", "password": "stud123", "name": "William Jones", "email": "william.jones@student.com", "class": "9A", "rollNo": "105", "parentId": "PAR005"}
    ],
    "parent": [
      {"id": "PAR001", "username": "parent1", "password": "parent123", "name": "John Smith", "email": "john.smith@parent.com", "childId": "STU001", "phone": "+1234567890"},
      {"id": "PAR002", "username": "parent2", "password": "parent123", "name": "Mary Wilson", "email": "mary.wilson@parent.com", "childId": "STU002", "phone": "+1234567891"},
      {"id": "PAR003", "username": "parent3", "password": "parent123", "name": "David Brown", "email": "david.brown@parent.com", "childId": "STU003", "phone": "+1234567892"},
      {"id": "PAR004", "username": "parent4", "password": "parent123", "name": "Jennifer Davis", "email": "jennifer.davis@parent.com", "childId": "STU004", "phone": "+1234567893"},
      {"id": "PAR005", "username": "parent5", "password": "parent123", "name": "Michael Jones", "email": "michael.jones@parent.com", "childId": "STU005", "phone": "+1234567894"}
    ]
  },
  "sampleAttendance": [
    {"studentId": "STU001", "date": "2025-08-25", "status": "Present", "subject": "Mathematics"},
    {"studentId": "STU001", "date": "2025-08-26", "status": "Present", "subject": "English"},
    {"studentId": "STU001", "date": "2025-08-27", "status": "Absent", "subject": "Science"},
    {"studentId": "STU002", "date": "2025-08-25", "status": "Present", "subject": "Mathematics"},
    {"studentId": "STU002", "date": "2025-08-26", "status": "Present", "subject": "English"},
    {"studentId": "STU003", "date": "2025-08-25", "status": "Present", "subject": "Mathematics"},
    {"studentId": "STU003", "date": "2025-08-26", "status": "Absent", "subject": "English"}
  ],
  "sampleMarks": [
    {"studentId": "STU001", "subject": "Mathematics", "testType": "Unit Test 1", "marks": 85, "maxMarks": 100, "date": "2025-08-20"},
    {"studentId": "STU001", "subject": "English", "testType": "Unit Test 1", "marks": 78, "maxMarks": 100, "date": "2025-08-21"},
    {"studentId": "STU001", "subject": "Science", "testType": "Unit Test 1", "marks": 92, "maxMarks": 100, "date": "2025-08-22"},
    {"studentId": "STU002", "subject": "Mathematics", "testType": "Unit Test 1", "marks": 76, "maxMarks": 100, "date": "2025-08-20"},
    {"studentId": "STU002", "subject": "English", "testType": "Unit Test 1", "marks": 88, "maxMarks": 100, "date": "2025-08-21"},
    {"studentId": "STU003", "subject": "Mathematics", "testType": "Unit Test 1", "marks": 89, "maxMarks": 100, "date": "2025-08-20"},
    {"studentId": "STU003", "subject": "English", "testType": "Unit Test 1", "marks": 82, "maxMarks": 100, "date": "2025-08-21"}
  ],
  "classes": ["9A", "9B", "10A", "10B"],
  "subjects": ["Mathematics", "English", "Science", "History", "Geography"],
  "testTypes": ["Unit Test 1", "Unit Test 2", "Midterm", "Final Exam", "Assignment"]
};

// Global variables
let currentUser = null;
let currentUserRole = null;
let users = {...sampleData.sampleUsers};
let attendance = [...sampleData.sampleAttendance];
let marks = [...sampleData.sampleMarks];

// Utility functions
function generateId(role) {
  const prefix = role.substring(0, 3).toUpperCase();
  const existingIds = users[role].map(user => parseInt(user.id.substring(3)));
  const maxId = Math.max(...existingIds, 0);
  return `${prefix}${String(maxId + 1).padStart(3, '0')}`;
}

function showMessage(message, type = 'success') {
  const messageEl = document.getElementById(type === 'success' ? 'successMessage' : 'errorMessage');
  messageEl.textContent = message;
  messageEl.style.display = 'block';

  setTimeout(() => {
    messageEl.style.display = 'none';
  }, 3000);
}

function showLoading(show = true) {
  document.getElementById('loadingSpinner').style.display = show ? 'block' : 'none';
}

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

function openModal(modalId) {
  document.getElementById(modalId).classList.add('active');
}

// Authentication functions
function login(role, username, password) {
  const roleUsers = users[role] || [];
  const user = roleUsers.find(u => u.username === username && u.password === password);

  if (user) {
    currentUser = user;
    currentUserRole = role;
    return true;
  }
  return false;
}

function logout() {
  currentUser = null;
  currentUserRole = null;
  showPage('loginPage');
}

// Dashboard initialization functions
function initOwnerDashboard() {
  document.getElementById('currentUserName').textContent = currentUser.name;
  updateOwnerStats();
  loadAdminsTable();
}

function initAdminDashboard() {
  document.getElementById('currentAdminName').textContent = currentUser.name;
  updateAdminStats();
  loadAllUsersTable();
  loadAttendanceRecords();
  loadMarksRecords();
  populateStudentSelects();
  setupTabs();
}

function initTeacherDashboard() {
  document.getElementById('currentTeacherName').textContent = currentUser.name;
  updateTeacherStats();
  populateTeacherClassSelect();
  populateTeacherStudentSelects();
  loadTeacherStudents();
  setupTeacherTabs();
}

function initStudentDashboard() {
  document.getElementById('currentStudentName').textContent = currentUser.name;
  updateStudentStats();
  loadStudentData();
}

function initParentDashboard() {
  document.getElementById('currentParentName').textContent = currentUser.name;
  updateParentStats();
  loadChildData();
}

// Statistics update functions
function updateOwnerStats() {
  document.getElementById('totalAdmins').textContent = users.admin.length;
  document.getElementById('totalTeachers').textContent = users.teacher.length;
  document.getElementById('totalStudents').textContent = users.student.length;
  document.getElementById('totalParents').textContent = users.parent.length;
}

function updateAdminStats() {
  document.getElementById('adminTotalTeachers').textContent = users.teacher.length;
  document.getElementById('adminTotalStudents').textContent = users.student.length;
  document.getElementById('adminTotalParents').textContent = users.parent.length;
}

function updateTeacherStats() {
  const teacherClasses = currentUser.classes || [];
  const teacherStudents = users.student.filter(student => 
    teacherClasses.includes(student.class)
  );

  document.getElementById('teacherClasses').textContent = teacherClasses.length;
  document.getElementById('teacherStudents').textContent = teacherStudents.length;
  document.getElementById('teacherSubject').textContent = currentUser.subject || '-';

  const attendanceCount = attendance.filter(record => 
    teacherStudents.some(student => student.id === record.studentId)
  ).length;
  document.getElementById('attendanceMarked').textContent = attendanceCount;
}

function updateStudentStats() {
  document.getElementById('studentClass').textContent = currentUser.class || '-';
  document.getElementById('studentRollNumber').textContent = currentUser.rollNo || '-';

  const studentAttendance = attendance.filter(record => record.studentId === currentUser.id);
  const presentCount = studentAttendance.filter(record => record.status === 'Present').length;
  const attendancePercent = studentAttendance.length > 0 ? 
    Math.round((presentCount / studentAttendance.length) * 100) : 0;
  document.getElementById('studentAttendancePercent').textContent = attendancePercent;

  const studentMarks = marks.filter(record => record.studentId === currentUser.id);
  const avgMarks = studentMarks.length > 0 ? 
    Math.round(studentMarks.reduce((sum, record) => sum + (record.marks / record.maxMarks * 100), 0) / studentMarks.length) : 0;
  document.getElementById('studentAverageMarks').textContent = avgMarks;
}

function updateParentStats() {
  const child = users.student.find(student => student.id === currentUser.childId);
  if (!child) return;

  document.getElementById('childName').textContent = child.name;
  document.getElementById('childClass').textContent = child.class;
  document.getElementById('childRollNumber').textContent = child.rollNo;

  const childAttendance = attendance.filter(record => record.studentId === child.id);
  const presentCount = childAttendance.filter(record => record.status === 'Present').length;
  const attendancePercent = childAttendance.length > 0 ? 
    Math.round((presentCount / childAttendance.length) * 100) : 0;

  document.getElementById('childAttendancePercent').textContent = attendancePercent;
  document.getElementById('childPresentDays').textContent = presentCount;

  const childMarks = marks.filter(record => record.studentId === child.id);
  const avgMarks = childMarks.length > 0 ? 
    Math.round(childMarks.reduce((sum, record) => sum + (record.marks / record.maxMarks * 100), 0) / childMarks.length) : 0;
  document.getElementById('childAverageMarks').textContent = avgMarks;
  document.getElementById('childTotalTests').textContent = childMarks.length;
}

// Table loading functions
function loadAdminsTable() {
  const tbody = document.querySelector('#adminsTable tbody');
  tbody.innerHTML = '';

  users.admin.forEach(admin => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${admin.id}</td>
      <td>${admin.name}</td>
      <td>${admin.username}</td>
      <td>${admin.email}</td>
      <td>
        <button class="btn btn--danger" onclick="deleteUser('admin', '${admin.id}')">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function loadAllUsersTable() {
  const tbody = document.querySelector('#allUsersTable tbody');
  const filter = document.getElementById('userTypeFilter').value;
  tbody.innerHTML = '';

  const allUsers = [];
  ['teacher', 'student', 'parent'].forEach(role => {
    if (!filter || filter === role) {
      users[role].forEach(user => {
        allUsers.push({...user, role});
      });
    }
  });

  allUsers.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.role}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>
        <button class="btn btn--danger" onclick="deleteUser('${user.role}', '${user.id}')">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Event listeners setup
document.addEventListener('DOMContentLoaded', function() {
  // Login form
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const role = document.getElementById('roleSelect').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (login(role, username, password)) {
      showMessage('Login successful!');
      setTimeout(() => {
        switch(role) {
          case 'owner':
            showPage('ownerDashboard');
            initOwnerDashboard();
            break;
          case 'admin':
            showPage('adminDashboard');
            initAdminDashboard();
            break;
          case 'teacher':
            showPage('teacherDashboard');
            initTeacherDashboard();
            break;
          case 'student':
            showPage('studentDashboard');
            initStudentDashboard();
            break;
          case 'parent':
            showPage('parentDashboard');
            initParentDashboard();
            break;
        }
      }, 500);
    } else {
      showMessage('Invalid credentials. Please try again.', 'error');
    }
  });

  // Logout buttons
  document.getElementById('logoutBtn').addEventListener('click', logout);
  document.getElementById('adminLogoutBtn').addEventListener('click', logout);
  document.getElementById('teacherLogoutBtn').addEventListener('click', logout);
  document.getElementById('studentLogoutBtn').addEventListener('click', logout);
  document.getElementById('parentLogoutBtn').addEventListener('click', logout);

  // Create admin button and form
  document.getElementById('createAdminBtn').addEventListener('click', () => openModal('createAdminModal'));

  document.getElementById('createAdminForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const newAdmin = {
      id: generateId('admin'),
      username: document.getElementById('adminUsername').value,
      password: document.getElementById('adminPassword').value,
      name: document.getElementById('adminName').value,
      email: document.getElementById('adminEmail').value
    };

    if (users.admin.some(admin => admin.username === newAdmin.username)) {
      showMessage('Username already exists!', 'error');
      return;
    }

    users.admin.push(newAdmin);
    loadAdminsTable();
    updateOwnerStats();
    closeModal('createAdminModal');
    this.reset();
    showMessage('Admin created successfully!');
  });

  // Create user form (Admin)
  document.getElementById('createUserForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const role = document.getElementById('newUserRole').value;
    const newUser = {
      id: generateId(role),
      username: document.getElementById('newUserUsername').value,
      password: document.getElementById('newUserPassword').value,
      name: document.getElementById('newUserName').value,
      email: document.getElementById('newUserEmail').value
    };

    // Add role-specific fields
    if (role === 'teacher') {
      newUser.subject = document.getElementById('teacherSubject').value;
      const classesSelect = document.getElementById('teacherClasses');
      newUser.classes = Array.from(classesSelect.selectedOptions).map(option => option.value);
    } else if (role === 'student') {
      newUser.class = document.getElementById('studentClass').value;
      newUser.rollNo = document.getElementById('studentRollNo').value;
    } else if (role === 'parent') {
      newUser.phone = document.getElementById('parentPhone').value;
      newUser.childId = document.getElementById('parentChild').value;
    }

    // Check for duplicate username
    const allUsernames = [];
    Object.values(users).forEach(roleUsers => {
      roleUsers.forEach(user => allUsernames.push(user.username));
    });

    if (allUsernames.includes(newUser.username)) {
      showMessage('Username already exists!', 'error');
      return;
    }

    users[role].push(newUser);
    loadAllUsersTable();
    updateAdminStats();
    this.reset();
    showMessage(`${role.charAt(0).toUpperCase() + role.slice(1)} created successfully!`);
  });

  // Role selection for user creation
  document.getElementById('newUserRole').addEventListener('change', function() {
    const role = this.value;

    // Hide all role-specific fields
    document.querySelectorAll('.role-specific-fields').forEach(field => {
      field.style.display = 'none';
    });

    // Show relevant fields
    if (role === 'teacher') {
      document.getElementById('teacherFields').style.display = 'block';
    } else if (role === 'student') {
      document.getElementById('studentFields').style.display = 'block';
      populateParentChildSelect();
    } else if (role === 'parent') {
      document.getElementById('parentFields').style.display = 'block';
      populateParentChildSelect();
    }
  });

  // User type filter
  document.getElementById('userTypeFilter').addEventListener('change', loadAllUsersTable);

  // Set today's date for date inputs
  const today = new Date().toISOString().split('T')[0];
  const dateInputs = ['attendanceDate', 'marksDate', 'teacherAttendanceDate', 'teacherMarksDate'];
  dateInputs.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.value = today;
    }
  });
});

// Attendance functions
function loadStudentsForAttendance() {
  const date = document.getElementById('attendanceDate').value;
  const className = document.getElementById('attendanceClass').value;
  const subject = document.getElementById('attendanceSubject').value;

  if (!date || !className || !subject) return;

  const classStudents = users.student.filter(student => student.class === className);
  const listContainer = document.getElementById('studentAttendanceList');
  listContainer.innerHTML = '';

  classStudents.forEach(student => {
    const item = document.createElement('div');
    item.className = 'attendance-item';
    item.innerHTML = `
      <span class="student-name">${student.name} (${student.rollNo})</span>
      <div class="attendance-controls">
        <button class="attendance-btn present" data-student="${student.id}" data-status="Present">Present</button>
        <button class="attendance-btn absent" data-student="${student.id}" data-status="Absent">Absent</button>
      </div>
    `;
    listContainer.appendChild(item);
  });

  document.getElementById('attendanceList').style.display = 'block';
}

// Delete user function
function deleteUser(role, userId) {
  if (confirm('Are you sure you want to delete this user?')) {
    users[role] = users[role].filter(user => user.id !== userId);

    if (currentUserRole === 'owner') {
      loadAdminsTable();
      updateOwnerStats();
    } else if (currentUserRole === 'admin') {
      loadAllUsersTable();
      updateAdminStats();
    }

    showMessage('User deleted successfully!');
  }
}

// Helper functions for populating selects
function populateStudentSelects() {
  const selects = ['marksStudent'];
  selects.forEach(selectId => {
    const select = document.getElementById(selectId);
    if (select) {
      select.innerHTML = '<option value="">Select Student</option>';
      users.student.forEach(student => {
        select.innerHTML += `<option value="${student.id}">${student.name} (${student.class})</option>`;
      });
    }
  });
}

function populateParentChildSelect() {
  const select = document.getElementById('parentChild');
  if (select) {
    select.innerHTML = '<option value="">Select Student</option>';
    users.student.forEach(student => {
      if (!users.parent.some(parent => parent.childId === student.id)) {
        select.innerHTML += `<option value="${student.id}">${student.name} (${student.class})</option>`;
      }
    });
  }
}

function populateTeacherClassSelect() {
  const select = document.getElementById('teacherAttendanceClass');
  if (select && currentUser.classes) {
    select.innerHTML = '<option value="">Select Class</option>';
    currentUser.classes.forEach(className => {
      select.innerHTML += `<option value="${className}">${className}</option>`;
    });
  }
}

function populateTeacherStudentSelects() {
  const select = document.getElementById('teacherMarksStudent');
  if (select && currentUser.classes) {
    select.innerHTML = '<option value="">Select Student</option>';
    const teacherStudents = users.student.filter(student => 
      currentUser.classes.includes(student.class)
    );
    teacherStudents.forEach(student => {
      select.innerHTML += `<option value="${student.id}">${student.name} (${student.class})</option>`;
    });
  }
}

// Load student data functions
function loadStudentData() {
  loadStudentAttendance();
  loadStudentMarks();
}

function loadStudentAttendance() {
  const tbody = document.querySelector('#studentAttendanceTable tbody');
  tbody.innerHTML = '';

  const studentAttendance = attendance
    .filter(record => record.studentId === currentUser.id)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  studentAttendance.forEach(record => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${record.date}</td>
      <td>${record.subject}</td>
      <td><span class="status ${record.status.toLowerCase()}">${record.status}</span></td>
    `;
    tbody.appendChild(row);
  });
}

function loadStudentMarks() {
  const tbody = document.querySelector('#studentMarksTable tbody');
  tbody.innerHTML = '';

  const studentMarks = marks
    .filter(record => record.studentId === currentUser.id)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  studentMarks.forEach(record => {
    const percentage = Math.round((record.marks / record.maxMarks) * 100);
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${record.subject}</td>
      <td>${record.testType}</td>
      <td>${record.marks}</td>
      <td>${record.maxMarks}</td>
      <td>${percentage}%</td>
      <td>${record.date}</td>
    `;
    tbody.appendChild(row);
  });
}

// Load child data for parent
function loadChildData() {
  const child = users.student.find(student => student.id === currentUser.childId);
  if (!child) return;

  loadChildAttendance(child.id);
  loadChildMarks(child.id);
}

function loadChildAttendance(childId) {
  const tbody = document.querySelector('#childAttendanceTable tbody');
  tbody.innerHTML = '';

  const childAttendance = attendance
    .filter(record => record.studentId === childId)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  childAttendance.forEach(record => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${record.date}</td>
      <td>${record.subject}</td>
      <td><span class="status ${record.status.toLowerCase()}">${record.status}</span></td>
    `;
    tbody.appendChild(row);
  });
}

function loadChildMarks(childId) {
  const tbody = document.querySelector('#childMarksTable tbody');
  tbody.innerHTML = '';

  const childMarks = marks
    .filter(record => record.studentId === childId)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  childMarks.forEach(record => {
    const percentage = Math.round((record.marks / record.maxMarks) * 100);
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${record.subject}</td>
      <td>${record.testType}</td>
      <td>${record.marks}</td>
      <td>${record.maxMarks}</td>
      <td>${percentage}%</td>
      <td>${record.date}</td>
    `;
    tbody.appendChild(row);
  });
}

// Tab functionality
function setupTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(targetTab + 'Tab').classList.add('active');
    });
  });
}

function setupTeacherTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(targetTab + 'Tab').classList.add('active');
    });
  });
}

// Load records functions
function loadAttendanceRecords() {
  const tbody = document.querySelector('#attendanceRecordsTable tbody');
  tbody.innerHTML = '';

  const sortedAttendance = [...attendance].sort((a, b) => new Date(b.date) - new Date(a.date));

  sortedAttendance.forEach(record => {
    const student = users.student.find(s => s.id === record.studentId);
    if (student) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.class}</td>
        <td>${record.subject}</td>
        <td>${record.date}</td>
        <td><span class="status ${record.status.toLowerCase()}">${record.status}</span></td>
      `;
      tbody.appendChild(row);
    }
  });
}

function loadMarksRecords() {
  const tbody = document.querySelector('#marksRecordsTable tbody');
  tbody.innerHTML = '';

  const sortedMarks = [...marks].sort((a, b) => new Date(b.date) - new Date(a.date));

  sortedMarks.forEach(record => {
    const student = users.student.find(s => s.id === record.studentId);
    if (student) {
      const percentage = Math.round((record.marks / record.maxMarks) * 100);
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.name}</td>
        <td>${record.subject}</td>
        <td>${record.testType}</td>
        <td>${record.marks}</td>
        <td>${record.maxMarks}</td>
        <td>${percentage}%</td>
        <td>${record.date}</td>
      `;
      tbody.appendChild(row);
    }
  });
}

function loadTeacherStudents() {
  const tbody = document.querySelector('#teacherStudentsTable tbody');
  if (!tbody || !currentUser.classes) return;

  tbody.innerHTML = '';

  const teacherStudents = users.student.filter(student => 
    currentUser.classes.includes(student.class)
  );

  teacherStudents.forEach(student => {
    const studentAttendance = attendance.filter(record => record.studentId === student.id);
    const presentCount = studentAttendance.filter(record => record.status === 'Present').length;
    const attendancePercent = studentAttendance.length > 0 ? 
      Math.round((presentCount / studentAttendance.length) * 100) : 0;

    const studentMarks = marks.filter(record => 
      record.studentId === student.id && record.subject === currentUser.subject
    );
    const avgMarks = studentMarks.length > 0 ? 
      Math.round(studentMarks.reduce((sum, record) => sum + (record.marks / record.maxMarks * 100), 0) / studentMarks.length) : 0;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.rollNo}</td>
      <td>${student.name}</td>
      <td>${student.class}</td>
      <td>${student.email}</td>
      <td>${attendancePercent}%</td>
      <td>${avgMarks}%</td>
    `;
    tbody.appendChild(row);
  });
}

// Additional event listeners for admin dashboard
document.addEventListener('DOMContentLoaded', function() {
  // Load students button for attendance
  const loadStudentsBtn = document.getElementById('loadStudentsBtn');
  if (loadStudentsBtn) {
    loadStudentsBtn.addEventListener('click', loadStudentsForAttendance);
  }

  // Save attendance button
  const saveAttendanceBtn = document.getElementById('saveAttendanceBtn');
  if (saveAttendanceBtn) {
    saveAttendanceBtn.addEventListener('click', function() {
      const date = document.getElementById('attendanceDate').value;
      const className = document.getElementById('attendanceClass').value;
      const subject = document.getElementById('attendanceSubject').value;

      const attendanceButtons = document.querySelectorAll('.attendance-btn.active');

      attendanceButtons.forEach(btn => {
        const studentId = btn.getAttribute('data-student');
        const status = btn.getAttribute('data-status');

        // Remove existing attendance for this student, date, and subject
        attendance = attendance.filter(record => 
          !(record.studentId === studentId && record.date === date && record.subject === subject)
        );

        // Add new attendance record
        attendance.push({
          studentId,
          date,
          status,
          subject
        });
      });

      loadAttendanceRecords();
      document.getElementById('attendanceList').style.display = 'none';
      document.getElementById('attendanceForm').reset();
      showMessage('Attendance saved successfully!');
    });
  }

  // Attendance button clicks
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('attendance-btn')) {
      const studentId = e.target.getAttribute('data-student');
      const buttons = document.querySelectorAll(`[data-student="${studentId}"]`);

      buttons.forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
    }
  });

  // Marks form submission
  const marksForm = document.getElementById('marksForm');
  if (marksForm) {
    marksForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const studentId = document.getElementById('marksStudent').value;
      const subject = document.getElementById('marksSubject').value;
      const testType = document.getElementById('marksTestType').value;
      const marksObtained = parseInt(document.getElementById('marksObtained').value);
      const maxMarks = parseInt(document.getElementById('marksMaximum').value);
      const date = document.getElementById('marksDate').value;

      // Remove existing marks for same student, subject, and test type
      marks = marks.filter(record => 
        !(record.studentId === studentId && record.subject === subject && record.testType === testType)
      );

      // Add new marks record
      marks.push({
        studentId,
        subject,
        testType,
        marks: marksObtained,
        maxMarks,
        date
      });

      loadMarksRecords();
      this.reset();
      document.getElementById('marksMaximum').value = 100; // Reset to default
      showMessage('Marks saved successfully!');
    });
  }

  // Teacher attendance functionality
  const teacherLoadStudentsBtn = document.getElementById('teacherLoadStudentsBtn');
  if (teacherLoadStudentsBtn) {
    teacherLoadStudentsBtn.addEventListener('click', function() {
      const date = document.getElementById('teacherAttendanceDate').value;
      const className = document.getElementById('teacherAttendanceClass').value;

      if (!date || !className) return;

      const classStudents = users.student.filter(student => student.class === className);
      const listContainer = document.getElementById('teacherStudentAttendanceList');
      listContainer.innerHTML = '';

      classStudents.forEach(student => {
        const item = document.createElement('div');
        item.className = 'attendance-item';
        item.innerHTML = `
          <span class="student-name">${student.name} (${student.rollNo})</span>
          <div class="attendance-controls">
            <button class="attendance-btn present" data-student="${student.id}" data-status="Present">Present</button>
            <button class="attendance-btn absent" data-student="${student.id}" data-status="Absent">Absent</button>
          </div>
        `;
        listContainer.appendChild(item);
      });

      document.getElementById('teacherAttendanceList').style.display = 'block';
    });
  }

  // Teacher save attendance
  const teacherSaveAttendanceBtn = document.getElementById('teacherSaveAttendanceBtn');
  if (teacherSaveAttendanceBtn) {
    teacherSaveAttendanceBtn.addEventListener('click', function() {
      const date = document.getElementById('teacherAttendanceDate').value;
      const className = document.getElementById('teacherAttendanceClass').value;
      const subject = currentUser.subject;

      const attendanceButtons = document.querySelectorAll('#teacherStudentAttendanceList .attendance-btn.active');

      attendanceButtons.forEach(btn => {
        const studentId = btn.getAttribute('data-student');
        const status = btn.getAttribute('data-status');

        // Remove existing attendance for this student, date, and subject
        attendance = attendance.filter(record => 
          !(record.studentId === studentId && record.date === date && record.subject === subject)
        );

        // Add new attendance record
        attendance.push({
          studentId,
          date,
          status,
          subject
        });
      });

      updateTeacherStats();
      document.getElementById('teacherAttendanceList').style.display = 'none';
      document.getElementById('teacherAttendanceForm').reset();
      showMessage('Attendance saved successfully!');
    });
  }

  // Teacher marks form
  const teacherMarksForm = document.getElementById('teacherMarksForm');
  if (teacherMarksForm) {
    teacherMarksForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const studentId = document.getElementById('teacherMarksStudent').value;
      const subject = currentUser.subject;
      const testType = document.getElementById('teacherMarksTestType').value;
      const marksObtained = parseInt(document.getElementById('teacherMarksObtained').value);
      const maxMarks = parseInt(document.getElementById('teacherMarksMaximum').value);
      const date = document.getElementById('teacherMarksDate').value;

      // Remove existing marks for same student, subject, and test type
      marks = marks.filter(record => 
        !(record.studentId === studentId && record.subject === subject && record.testType === testType)
      );

      // Add new marks record
      marks.push({
        studentId,
        subject,
        testType,
        marks: marksObtained,
        maxMarks,
        date
      });

      loadTeacherStudents();
      this.reset();
      document.getElementById('teacherMarksMaximum').value = 100; // Reset to default
      showMessage('Marks saved successfully!');
    });
  }
});

// Initialize the application
console.log('School ERP System loaded successfully!');
console.log('Sample credentials available in demo section');
