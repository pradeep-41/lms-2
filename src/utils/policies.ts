 
export const policies = {
  "PaidLeavePolicy": {
    "LeaveEntitlement": "All full-time employees are entitled to 1.5 days of paid leave for each month of service. Paid leave accumulates continuously and does not reset at the end of the calendar or fiscal year.",
    "TypesOfPaidLeave": [
      "Casual Leave – Personal matters, rest days, short trips.",
      "Sick Leave – Health or medical-related absences.",
      "Emergency Leave – Unplanned urgent family or personal matters."
    ],
    "LeaveUsageGuidelines": {
      "UpTo3Days": "Employees may take up to 3 consecutive days of paid leave at a time without special approval but requests must be submitted at least 7 days in advance.",
      "MoreThan3Days": "For more than 3 consecutive days, prior written approval from the HR Team is required.",
      "CompanyScheduledLeaves": "The company may schedule employees for long paid leaves during low activity periods or breaks."
    },
    "LeaveBalanceAndEncashment": {
      "Accumulation": "Unused paid leave will continue to accumulate throughout employment.",
      "EncashmentUponResignation": {
        "15Days": "half-month gross salary",
        "30Days": "full-month gross salary",
        "PartialDays": "paid on a pro-rata basis"
      }
    },
    "ExceedingLeaveBalance": {
      "Options": [
        "Deducted from salary using their normal OT hourly rate (8 hours/day)",
        "Carried forward as negative leave to be recovered from future leave accruals"
      ],
      "DecisionBy": "The decision will be made by HR based on leave type and context."
    },
    "UnauthorizedLeave": {
      "Description": "If an employee's leave request is formally rejected by HR, but they still remain absent, the leave will be treated as unauthorized.",
      "SalaryDeduction": "Total hours will be deducted from salary based on their weekend overtime hourly rate, calculated at 8 hours per day.",
      "DisciplinaryAction": "Repeated violations may result in disciplinary action as per company policy."
    },
    "HRDiscretionAndFairUse": {
      "Factors": [
        "Business requirements",
        "Reason and urgency of leave",
        "Employee’s attendance and performance history"
      ],
      "RightReserved": "HR reserves the right to approve, deny, or adjust any leave request depending on the above factors."
    }
  },
  "RemoteWorkPolicy": {
    "Intro": "As an employee of Resimator Oy, it is essential to adhere to the following guidelines to ensure productivity, professionalism, and effective communication while working remotely. Failure to comply with these standards may result in disciplinary action.",
    "WorkHoursAndAttendance": {
      "StartTime": "All employees are required to commence work promptly by 9:00 AM NP time.",
      "LateNotice": "If unforeseen circumstances prevent a timely login, employees must inform HR within 15 minutes of the start time.",
      "GoodMorningMessage": "Each remote worker is required to send a 'Good Morning' message in the designated daily attendance channel upon starting their workday. After this message, employees are expected to remain online and available for communication and work. The use of mobile devices to send this message is discouraged."
    },
    "InfrastructureRequirements": [
      "Remote workers must maintain a stable internet connection and have access to electricity backup for routers and other essential devices.",
      "Employees must have a private workspace conducive to productive work."
    ],
    "CommunicationResponsiveness": {
      "Requirement": "Employees are obligated to promptly respond to messages and calls from team members, HR, and Admin throughout the workday.",
      "HRRights": "HR reserves the right to notify employees of their offline status. Repeated instances of offline status may lead to necessary actions being taken."
    },
    "DailyTaskHourLog": {
      "Requirement": "Each remote employee is required to maintain a daily task hour log to track their work activities accurately.",
      "Contents": "The task hour log should include start and end times for each task and the project worked on during the day.",
      "Importance": "Consistency in updating the task hour log is essential to ensure transparency and accountability in remote work.",
      "Deviations": "Any deviations from the regular work schedule or additional hours worked should be documented in the task hour log.",
      "Review": "The task hour log may be subject to review by the Company CEO and HR managers or Team leader for performance evaluation and workload management purposes.",
      "DisciplinaryAction": "Failure to maintain the task hour log consistently may result in disciplinary action."
    },
    "MonitoringAndAccountability": "In cases where employees struggle with offline issues or work performance, HR and Admin may utilize third-party monitoring applications to monitor and address these concerns.",
    "OfficeWorkMandate": "If persistent issues regarding work performance and communication arise, HR reserves the authority to require employees to work from the office as deemed necessary.",
    "LunchBreakAndOther": {
      "Timing": "Lunch timing is designed from 12 PM to 2 PM or accommodating the needs of individual teams. The lunch break need not be over one hour.",
      "StatusUpdate": "Employees are required to update their status if taking breaks or attending to personal matters during work hours."
    },
    "GeneralConduct": [
      "All employees must professionally conduct themselves while representing the company, adhering to company policies and values.",
      "Use of company resources for personal activities unrelated to work is strictly prohibited."
    ],
    "ConfidentialityAndSecurity": [
      "Remote workers must uphold the same standards of confidentiality and data security as in-office employees.",
      "Proper measures must be taken to ensure the security of company data and information, including the use of secure networks and adherence to data protection protocols."
    ],
    "TrainingAndDevelopment": {
      "Encouragement": "Remote employees are strongly encouraged to engage in company-provided training and development activities tailored to bolster their skills and knowledge pertinent to their roles.",
      "Scheduling": "These sessions can be scheduled during regular working hours or outside of typical office hours, including weekends, to accommodate diverse schedules.",
      "Note": "Training time should not extend into overtime hours."
    },
    "Conclusion": "Remote work offers flexibility and autonomy, but it also demands accountability and professionalism. The company expects by adhering to these guidelines, employees contribute to a productive and cohesive work environment."
  },
  "LeaveWFHRequestPolicy": {
    "CasualLeaveRequest": {
      "AdvanceNotice": "Casual leave requests must be submitted at least 7 days in advance.",
      "Exceptions": "In exceptional cases (such as personal emergencies or unforeseen situations), the reason must be clearly mentioned in the leave application.",
      "Approval": "All leave requests are subject to approval by the HR Team."
    },
    "ShortNoticeLeave": [
      "Medical emergencies",
      "Sick leave",
      "Force majeure (e.g., natural disasters, family emergencies)"
    ],
    "SupportingDocumentation": "HR may ask for supporting documentation or an explanation.",
    "LeaveWithoutApproval": "If an employee proceeds on leave without approval from HR, the absence will be treated as unauthorized. Salary deduction or disciplinary action may apply as per the Paid Leave Policy and HR’s discretion.",
    "WorkFromHomeRequest": {
      "Submission": "WFH requests must be submitted and discussed in advance with the concerned team lead or supervisor.",
      "Approval": "Final approval must be obtained from the HR Team.",
      "Criteria": [
        "Feasibility of the task to be done remotely",
        "Team and project coordination",
        "Business requirements"
      ]
    },
    "RequestSubmissionProcess": [
      "Fill up the Leave/WFH Request Form on the company’s designated site (LMS).",
      "If the site is not accessible, you may email the HR Admin at hr@idnepal.com.",
      "OR call/SMS: 9851208703.",
      "OR send a message to the HR Admin on Slack."
    ],
    "ForFurtherAssistance": "For any additional queries, please contact Purushottam Pudasaini (HR Admin)."
  },
  "WeeklyFutsalProgram": {
    "Description": "A weekly futsal is scheduled for every Friday as a part of team-building activities. We encourage everyone to participate in the activity no matter if you’re working on-site or remotely.",
    "Schedule": "Generally, the futsal starts at 6 pm.",
    "WorkdayAdjustment": "For those participating in the futsal, the work day will end by 5:45 PM (to travel to the futsal location), while for the rest, the day ends at the regular time.",
    "ChangeNotification": "Any change in the program will be pre-informed via the slack channel by Purushottam Pudasaini."
  }
}
