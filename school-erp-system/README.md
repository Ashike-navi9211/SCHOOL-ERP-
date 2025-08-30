# School ERP System

A comprehensive web-based Educational Resource Planning (ERP) system designed for schools to manage students, teachers, parents, admins, and educational data.

## Features

### Multi-Role Authentication System
- **Owner**: Creates and manages admins, system overview
- **Admin**: Creates and manages teachers, students, parents; handles attendance and marks
- **Teacher**: Marks attendance and enters grades for their students
- **Student**: Views personal attendance and marks (read-only)
- **Parent**: Views child's attendance and marks (read-only)

### Key Functionalities
- User management with role-based access control
- Attendance tracking and management
- Marks/grades management
- Student-parent relationship mapping
- Teacher-class assignment
- Responsive dashboard for each user role
- Data visualization with statistics

## Demo Credentials

### Owner
- Username: `owner`
- Password: `owner123`

### Admin
- Username: `admin1`
- Password: `admin123`

### Teacher
- Username: `teacher1`
- Password: `teach123`

### Student
- Username: `student1`
- Password: `stud123`

### Parent
- Username: `parent1`
- Password: `parent123`

## Installation & Setup

1. Extract the ZIP file to your web server directory
2. Open `index.html` in a web browser
3. Use the demo credentials above to explore different user roles

## File Structure

```
school-erp-system/
├── index.html          # Main HTML file with all pages
├── style.css           # Complete CSS styling
├── app.js              # JavaScript application logic
└── README.md           # This file
```

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Storage**: In-memory JavaScript objects (no backend required)
- **Responsive**: Mobile-friendly design
- **No Dependencies**: Pure web technologies, no frameworks required

## User Roles & Permissions

### Owner
- Create and delete admins
- View system-wide statistics
- Access to all system data

### Admin
- Create and delete teachers, students, parents
- Mark attendance for all students
- Enter marks for all students
- View comprehensive reports

### Teacher
- Mark attendance for assigned classes
- Enter marks for their subject
- View student information for their classes

### Student
- View personal attendance records
- View personal marks and grades
- Cannot modify any data

### Parent
- View child's attendance
- View child's marks and grades
- Cannot modify any data

## Features in Detail

### Dashboard Components
- Role-specific statistics cards
- Data tables with sorting and filtering
- Form-based data entry
- Modal dialogs for user creation
- Tab-based navigation within roles

### Attendance System
- Date-wise attendance marking
- Subject-specific attendance
- Present/Absent status tracking
- Attendance percentage calculation

### Marks Management
- Subject-wise marks entry
- Multiple test types support
- Percentage calculation
- Grade tracking over time

### Security Features
- Role-based access control
- Session management
- Input validation
- Secure user authentication

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Customization

The system can be easily customized by modifying:

- **Classes**: Update the classes array in `app.js`
- **Subjects**: Modify the subjects array
- **User roles**: Extend the roles system
- **Styling**: Customize CSS variables for theming
- **Sample data**: Update sample data in `sampleData` object

## Development Notes

- Uses modern CSS features (CSS Grid, Flexbox, CSS Variables)
- Responsive design principles
- Accessibility considerations
- Progressive enhancement
- Clean, maintainable code structure

## License

This project is provided as-is for educational and demonstration purposes.

## Support

For customization or development support, please refer to the code comments and structure documentation within the files.
