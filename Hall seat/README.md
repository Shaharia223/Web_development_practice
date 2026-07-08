# Hall Seat Status Tracker

A comprehensive **100% FREE** and **offline** hall seat allocation management system built with HTML, CSS, JavaScript, and modern web technologies. This application helps university/college hall administrators track and manage student seat allocations with real-time status updates.

## 🚀 Key Features

### Core Functionality
- **Seat Status Tracking**: Monitor current and expired seat allocations
- **Real-time Dashboard**: Visual grid display of all hall seats
- **Multi-Building Support**: Manage seats across multiple buildings (Jamuna, Padma, Meghna)
- **Room-based Organization**: Seats organized by building and room number
- **Status Management**: Track active and expired student allocations

### Data Management
- **100% Offline**: No cloud services required - data stored locally in browser
- **Multiple Import Methods**:
  - CSV/TSV paste functionality
  - Excel file import (.xlsx, .xls, .csv)
  - JSON backup import
- **Export Options**:
  - Excel export with proper formatting
  - JSON backup for data portability
- **Data Persistence**: Automatic local storage with browser persistence

### Advanced Features
- **Smart Filtering**: Filter by building, room, or allocation status
- **Intelligent Sorting**: Seats automatically sorted by building → room → seat letter
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Admin Authentication**: Secure admin panel with session management
- **Data Preview**: Preview changes before committing updates
- **Merge/Replace Options**: Choose between merging new data or replacing all existing data

## 📋 Seat ID Format

The system uses a standardized seat ID format:
```
[Building Code]-[Room Number]([Seat Letter])

Examples:
- J-10007(A) - Jamuna Building, Room 10007, Seat A
- P-20001(B) - Padma Building, Room 20001, Seat B  
- M-30005(C) - Meghna Building, Room 30005, Seat C
```

## 🎯 User Interface Components

### Main Dashboard
- **Seat Grid**: Visual representation of all seats with color coding
- **Filter Panel**: Building, room, and status filters
- **Statistics**: Real-time count of total, current, and expired seats
- **Legend**: Color-coded status indicators

### Seat Status Colors
- 🟢 **Green (Current)**: Active student allocation
- 🔴 **Red (Expired)**: Allocation needs renewal/vacation

### Admin Panel Features
- **Secure Login**: Multiple admin account support with session management
- **Data Import**: 
  - Paste CSV data directly
  - Upload Excel/CSV files
  - Import JSON backups
- **Data Export**:
  - Export to Excel with formatted columns
  - Create JSON backups
- **Update Modes**:
  - **Replace All**: Clear existing data and load new data
  - **Merge**: Keep existing data and add/update with new data
- **Preview System**: See changes before applying them

## 📊 Data Structure

### Required Data Columns
1. **Seat ID**: Unique seat identifier (format: Building-Room(Letter))
2. **Name**: Student name
3. **Department**: Academic department (CSE, EEE, BBA, etc.)
4. **Session**: Academic session (e.g., 2023-24)
5. **Room No**: Physical room number
6. **Building**: Building name (Jamuna Building, Padma Building, etc.)
7. **Status**: Current or Expired

### Sample Data Format (Excel)
The application automatically loads data from `Hall_Seat_Allocation_2025.xlsx`. The Excel file should contain the following columns:

| Column | Description | Example |
|--------|-------------|---------|
| Seat ID | Unique identifier | J-10007(A) |
| Student Name | Full name | Ahmed Hassan |
| Department | Academic department | CSE |
| Session | Academic year | 2023-24 |
| Room No | Room number | 10007 |
| Building | Building name | Jamuna Building |
| Floor No | Floor information | 1st Floor |
| Floor Teacher | Assigned teacher | Dr. Rahman |
| Status | Current or Expired | Current |

## 🔐 Admin Authentication

### Default Admin Accounts
- **Main Admin**: `admin` / `hall2025`
- **Hall Manager**: `hallmanager` / `manager123`
- **Supervisor**: `supervisor` / `super456`

**⚠️ Security Note**: Change these default credentials in the code before production use.

### Session Management
- Auto-login persistence (2-hour session validity)
- Inactivity timeout (30 minutes)
- Secure logout functionality

## 🛠️ Technical Specifications

### Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS framework
- **Typography**: Inter font family
- **Data Processing**: SheetJS library for Excel import/export
- **Storage**: Browser localStorage API
- **Icons**: Unicode emoji icons

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### File Dependencies
- `Tailwind CSS` (CDN): UI framework
- `SheetJS/xlsx` (CDN): Excel file processing
- `Google Fonts` (CDN): Inter font family

## 📱 Responsive Design Features

### Desktop View
- Multi-column seat grid
- Full admin panel access
- Comprehensive filter options
- Detailed statistics display

### Mobile/Tablet View
- Responsive grid layout
- Touch-friendly interface
- Collapsible sections
- Optimized navigation

## 🔧 Installation & Setup

1. **Download**: Save the `hall_seat_local.html` file
2. **Open**: Double-click the file to open in any modern web browser
3. **Ready**: The application is immediately ready to use with sample data
4. **Admin Access**: Click "Administrator Login" to access admin features

### No Installation Required
- No web server needed
- No database setup required
- No internet connection needed (after initial load)
- Works entirely offline

## 📈 Data Management Workflows

### Adding New Data
1. Login as administrator
2. Prepare data in Excel or CSV format
3. Either:
   - Copy/paste CSV data into the text area
   - Upload Excel/CSV file using import button
4. Choose update mode (Replace or Merge)
5. Preview changes
6. Confirm update

### Updating Existing Data
1. Export current data to Excel
2. Make modifications in Excel
3. Import the updated file
4. Use "Merge" mode to update only changed records

### Backup & Restore
1. **Backup**: Use "Export JSON Backup" to save all data
2. **Restore**: Use file input to import JSON backup
3. **Migration**: Transfer JSON files between devices

## 🎨 Customization Options

### Building Configuration
- Add/modify building codes in the sample data
- Update building names in the data structure
- Customize seat ID format as needed

### UI Customization
- Modify color schemes in CSS
- Adjust grid sizing and spacing
- Change typography and fonts
- Update status indicators

### Admin Credentials
- Update the `ADMIN_CREDENTIALS` object in the JavaScript code
- Add or remove admin accounts
- Modify session timeout settings

## 🔍 Troubleshooting

### Common Issues
1. **Data not saving**: Check if browser allows localStorage
2. **Excel import failing**: Verify column names match expected format
3. **Filters not working**: Clear all filters and reload
4. **Admin panel not showing**: Verify login credentials

### Debug Features
- "Debug Data" button shows detailed data analysis
- Browser console logs provide detailed information
- Preview system helps identify data issues

## 📋 Future Enhancement Ideas

- **Student Portal**: Allow students to check their own seat status
- **Notification System**: Email/SMS alerts for expiring allocations
- **Payment Integration**: Track fee payments with seat allocations
- **Reporting**: Generate detailed reports and analytics
- **Multi-Hall Support**: Manage multiple halls from single dashboard
- **QR Code Generation**: Generate QR codes for seat identification

## 🤝 Support & Maintenance

### Regular Maintenance
- Export regular JSON backups
- Update admin passwords periodically
- Clear browser cache if performance issues occur
- Update sample data as needed

### Data Security
- Data stored locally in browser
- No cloud transmission unless exported manually
- Admin sessions expire automatically
- Secure login required for modifications

## 📞 Usage Tips

1. **Regular Backups**: Export JSON backups monthly
2. **Data Validation**: Always preview changes before confirming
3. **Filter Usage**: Use filters to quickly find specific seats or buildings
4. **Excel Preparation**: Ensure proper column headers for smooth import
5. **Session Management**: Login once and work within session timeouts

---

**Version**: 1.0  
**Last Updated**: October 2025  
**License**: Free to use and modify  
**Support**: Self-contained application with built-in help features