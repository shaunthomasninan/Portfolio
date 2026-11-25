// Project case-study content. Edit this file to change detail pages.
window.PROJECT_ORDER = ["periyar", "parambikulam", "hawk", "serpent", "meetmydoc", "go-mammal", "zeal", "leovex", "silent-valley", "mvs", "gwf", "wildwatch", "bizezee", "kfdc", "snakebite", "pethe", "jewelbiz", "jumbo-radar", "kl06"];
window.PROJECTS = {
  "periyar": {
    "slug": "periyar",
    "title": "Periyar Tiger Reserve Booking Platform",
    "client": "Kerala Forest Department",
    "categories": [
      "dev"
    ],
    "summary": "Live platform for online and counter bookings, kiosks, entrance tickets, cottages, boating and shuttle buses — with cancellations, reschedules, refunds and settlement reports. Built the public website, admin panel and spot-booking app (400+ commits).",
    "stack": [
      "Vue",
      "Vuetify",
      "Node.js",
      "MongoDB",
      "Razorpay",
      "Socket.io"
    ],
    "role": "Built and maintained the public website, admin panel and spot-booking app (400+ commits), and built and fixed the Node.js/Express APIs for booking, cancellation and refund split-up, reports, ticket PDFs, schedulers, email/SMS and Razorpay settlement.",
    "overview": "Online and on-site booking platform for Periyar Tiger Reserve, operated for the Kerala Forest Department. Visitors reserve eco-tourism programmes, boating, cottages and entrance tickets online, while staff handle counter sales, verification, refunds and reporting.",
    "audience": [
      "Tourists booking programmes online",
      "Forest staff at ticket counters and kiosks",
      "Reserve administrators managing programmes and rates",
      "Accounts staff reconciling payments and refunds",
      "Gate staff verifying tickets"
    ],
    "modules": [
      {
        "name": "Customer website",
        "text": "Vue single-page site where visitors browse programmes, check availability, book, pay, view bookings and request cancellations or reschedules."
      },
      {
        "name": "Admin panel",
        "text": "Back-office for programmes, slots, rates, holidays, combos, bookings, cancellations, refunds, reports and staff access."
      },
      {
        "name": "Counter booking app",
        "text": "Walk-in sales application for ticket counters, with cash or card payments, printed tickets and boarding passes; a Vue 3 rewrite is in progress."
      },
      {
        "name": "Staff mobile app",
        "text": "Flutter app for staff login, ticket QR scanning and verification, and assisted bookings."
      },
      {
        "name": "API backend",
        "text": "Node.js and Express service on MongoDB serving all clients, with payment webhooks, PDF generation and scheduled jobs."
      }
    ],
    "features": [
      {
        "title": "Programme and slot catalogue",
        "text": "Programmes with categories, slots, per-slot capacity, guest limits, add-ons and image galleries, plus combo packages that bundle several programmes."
      },
      {
        "title": "Availability and rate engine",
        "text": "Capacity is split between online and counter sales, and rates vary by guest type, weekday, weekend and holiday calendar."
      },
      {
        "title": "Cottages, boating and guide slots",
        "text": "Special programme types cover cottage stays with extra guests, boating seats with per-guest ticket limits, and guide-led slots."
      },
      {
        "title": "Cart with timed seat hold",
        "text": "Selected seats are held in a cart for a limited time while the visitor completes guest details and payment."
      },
      {
        "title": "Online payments",
        "text": "Razorpay checkout with webhook confirmation and scheduled reconciliation of pending payments."
      },
      {
        "title": "Tickets and QR verification",
        "text": "PDF tickets and boarding passes carry QR codes that gate staff scan in the mobile app or counter tools."
      },
      {
        "title": "Cancellation and reschedule",
        "text": "Customers can request cancellation or move a booking to a new slot, with refund calculation and administrator approval."
      },
      {
        "title": "Counter and kiosk sales",
        "text": "Dedicated counter flow records walk-in sales and prints tickets, and a kiosk route supports self-service entry tickets."
      },
      {
        "title": "Reports and settlements",
        "text": "Booking, programme-wise, abstract, refund and settlement reports with Excel and PDF export, plus role-based staff permissions."
      }
    ],
    "workflow": [
      {
        "title": "Browse programmes",
        "text": "A visitor explores programmes on the website and opens a programme page to read details, rules and photos."
      },
      {
        "title": "Pick date and slot",
        "text": "The visitor chooses a date and slot, and the system computes remaining online capacity against closures, holidays and rates."
      },
      {
        "title": "Hold seats in cart",
        "text": "Seats are added to a cart and reserved temporarily, after the visitor signs in or registers with an OTP-supported account."
      },
      {
        "title": "Enter guest details",
        "text": "Guest names, nationality and ID details are captured, and the booking summary shows the total including entrance and add-on charges."
      },
      {
        "title": "Pay through Razorpay",
        "text": "Payment is taken online. The server confirms it through a webhook and a reconciliation job, then activates the booking."
      },
      {
        "title": "Receive ticket",
        "text": "A PDF ticket with QR code is generated and sent by email, and stays available under the visitor's bookings."
      },
      {
        "title": "Verify and report",
        "text": "Gate staff scan the QR to verify entry, while administrators handle cancellations, refunds and settlement reports."
      }
    ],
    "highlights": [
      "One Node/Express backend serves the customer site, admin panel, counter app and mobile app against a shared MongoDB data model.",
      "Large domain coverage: programmes, cottages, boating, guide slots, shuttle buses, entrance tickets, combos and add-ons in a single booking engine.",
      "Background jobs clean up expired holds, reconcile gateway payments, sync settlements and run scheduled database backups.",
      "PDF tickets, boarding passes and reports are generated server-side, with Excel exports for accounts and audit use.",
      "The counter app is being rebuilt on Vue 3, Vite, Tailwind and Pinia alongside the live Vue 2 version."
    ]
  },
  "parambikulam": {
    "slug": "parambikulam",
    "title": "Parambikulam Tiger Reserve",
    "client": "Kerala Forest Department",
    "categories": [
      "dev"
    ],
    "summary": "Eco-tourism booking platform with cart, cancellations with refund split-up, reschedules, bus allocation, an eco-shop and scheduled jobs.",
    "stack": [
      "Vue",
      "Node.js",
      "MongoDB",
      "Razorpay"
    ],
    "role": "Frontend development with Vue, plus Node.js/Express work on booking, cancellations with refund split-up and scheduled jobs.",
    "overview": "Eco-tourism booking platform for Parambikulam Tiger Reserve. Visitors book forest programmes, accommodation and shop merchandise online, and the reserve manages programmes, staff, assets and reports from a single admin system.",
    "audience": [
      "Tourists booking programmes and stays online",
      "Customers buying from the eco shop",
      "Reserve administrators and office staff",
      "Accounts and reporting staff",
      "Field and transport staff handling vehicles and attendance"
    ],
    "modules": [
      {
        "name": "Public website",
        "text": "Vue site for programme discovery, availability, booking, payments, rescheduling, feedback, the reserve's story and an online eco shop."
      },
      {
        "name": "Admin panel",
        "text": "Management console for programmes, slots, bookings, cancellations, shop products and stock, assets, naturalists, offices, analytics and role-based staff access."
      },
      {
        "name": "API backend",
        "text": "Node.js and Express service on MongoDB covering bookings, payments, shop orders, reports, scheduled jobs and mobile endpoints."
      }
    ],
    "features": [
      {
        "title": "Programme booking engine",
        "text": "Programmes, categories, slots, capacity, holidays, closures and rate tables drive date and slot availability for online booking."
      },
      {
        "title": "Accommodation reservations",
        "text": "Cottage-type programmes and administrator-managed reservations support stays alongside day programmes."
      },
      {
        "title": "Online payments",
        "text": "Razorpay payments for bookings and shop orders, with status polling screens, success and failure handling and scheduled checks."
      },
      {
        "title": "Cancel and reschedule",
        "text": "Customers can reschedule or cancel bookings, while administrators review refund data and monthly refund reports."
      },
      {
        "title": "Eco shop",
        "text": "Product catalogue, cart, delivery address, checkout, order tracking, invoices, stock management and product reviews."
      },
      {
        "title": "Tickets and PDFs",
        "text": "Booking tickets, invoices and reports are generated as PDFs with QR codes."
      },
      {
        "title": "Transport and vehicle allocation",
        "text": "Buses and vehicles are listed, assigned to tickets and linked to guides and drivers for programme trips."
      },
      {
        "title": "Asset and inventory management",
        "text": "Units, assets, repair records, purchase requests and inventory stock are tracked by office or unit."
      },
      {
        "title": "Staff and content management",
        "text": "Attendance and leave, naturalist profiles, annual reports, content pages and role-based menus are managed from the admin panel."
      }
    ],
    "workflow": [
      {
        "title": "Choose a programme",
        "text": "A visitor browses programme categories on the website and opens a programme to read its details and rules."
      },
      {
        "title": "Select date and slot",
        "text": "Availability is checked for the chosen date, factoring in closures, holidays and the share of seats reserved for online sale."
      },
      {
        "title": "Add guests to cart",
        "text": "The visitor signs in, adds guests and details to the cart, and the selected seats are held while the booking is completed."
      },
      {
        "title": "Pay online",
        "text": "Razorpay handles payment. The backend verifies the result, and a scheduled job reconciles payments that did not return cleanly."
      },
      {
        "title": "Get the ticket",
        "text": "A confirmed booking produces a PDF ticket with a QR code and a confirmation email, visible in the visitor's booking history."
      },
      {
        "title": "Change or cancel",
        "text": "The visitor can reschedule to another slot or request a cancellation, and administrators review refund details."
      },
      {
        "title": "Reserve operations",
        "text": "Staff allocate vehicles, track entry points and review booking, payment and accommodation reports from the admin panel."
      }
    ],
    "highlights": [
      "Single Node/Express backend on MongoDB serves the public site, admin console and mobile-oriented endpoints for staff apps.",
      "Wide operational scope beyond ticketing: eco shop, asset repair tracking, inventory, attendance and leave, and transport allocation.",
      "Scheduled jobs handle expiring cart holds, payment reconciliation and daily database backups.",
      "Server-side PDF generation for tickets, invoices and reports, plus Excel exports for accounts.",
      "Separate Razorpay flows for programme bookings, shop purchases and reschedule payments."
    ]
  },
  "hawk": {
    "slug": "hawk",
    "title": "HAWK — Wildlife Crime Management",
    "client": "Wildlife Trust of India · Tamil Nadu Forest Department",
    "categories": [
      "dev"
    ],
    "summary": "Maintaining the Peregrine and Shikra modules and developing a secure offence-handling module with system-generated legal forms, a habitual-offender database, and reporting & analytics.",
    "stack": [
      "Full stack",
      "Reports",
      "Analytics",
      "Server support"
    ],
    "role": "Contract developer with the Wildlife Trust of India: maintaining the Peregrine and Shikra modules and developing the offence-handling, habitual-offender and reporting & analytics modules. Takes part in technical reviews and presentations with the forest department and manages the server when senior developers are unavailable.",
    "overview": "HAWK is a wildlife crime management system used by the Tamil Nadu Forest Department, developed and maintained with the Wildlife Trust of India. It supports the recording and handling of wildlife offences, monitoring of habitual offenders, and reporting and analytics.",
    "audience": [
      "Forest Department enforcement staff",
      "Officers who review and supervise cases",
      "Wildlife conservation partners"
    ],
    "modules": [
      {
        "name": "Peregrine",
        "text": "One of the two core HAWK modules, maintained as part of the Tamil Nadu Forest Department deployment."
      },
      {
        "name": "Shikra",
        "text": "The second core HAWK module, maintained alongside Peregrine for the same department."
      },
      {
        "name": "Offence handling",
        "text": "A secure module for handling offences, with legal forms generated by the system."
      },
      {
        "name": "Habitual offenders",
        "text": "A database and monitoring module for tracking repeat offenders."
      },
      {
        "name": "Reports and analytics",
        "text": "Report generation and analytics built on the recorded data."
      }
    ],
    "features": [
      {
        "title": "Secure offence handling",
        "text": "Offences are handled in a dedicated, secured module built for sensitive enforcement records."
      },
      {
        "title": "System-generated legal forms",
        "text": "Legal forms are generated by the system as part of the offence-handling process."
      },
      {
        "title": "Habitual-offender database",
        "text": "A structured database of repeat offenders, with a monitoring module on top of it."
      },
      {
        "title": "Report generation",
        "text": "Reports can be generated from the system for review and supervision."
      },
      {
        "title": "Analytics",
        "text": "An analytics module summarises recorded data to support oversight."
      }
    ],
    "highlights": [
      "Built for the Tamil Nadu Forest Department in association with the Wildlife Trust of India.",
      "Work spans maintaining the existing Peregrine and Shikra modules and developing new modules on top of them.",
      "Includes technical reviews and presentations with the department, and server support when senior developers are unavailable.",
      "The team also supports the Kerala, Karnataka and Odisha systems in emergencies."
    ]
  },
  "serpent": {
    "slug": "serpent",
    "title": "SERPENT",
    "client": "Snake rescue platform",
    "categories": [
      "dev"
    ],
    "summary": "Rescue request tracking, rescuer management, a snake species directory, a nearby-hospital locator and map-based heatmap dashboards.",
    "stack": [
      "Vue 3",
      "Nuxt 3",
      "Leaflet",
      "Node.js",
      "Redis"
    ],
    "role": "Developing the admin panel and public website with Vue 3, Nuxt 3, Pinia and Tailwind CSS.",
    "overview": "SERPENT is a snake rescue and snakebite-response platform made up of a mobile app, an admin panel, a public website and an API. It connects the public, volunteer rescuers, doctors, educators and administrators, so rescue requests, snake identification and nearby hospital information are managed in one system.",
    "audience": [
      "Members of the public reporting or identifying snakes",
      "Volunteer snake rescuers",
      "Doctors and hospitals treating snakebite",
      "Educators and NGOs",
      "State and district administrators"
    ],
    "modules": [
      {
        "name": "Mobile app",
        "text": "Flutter app for reporting snakes, tracking rescues, browsing species, finding hospitals and handling role-specific work for rescuers, doctors and educators."
      },
      {
        "name": "Admin panel",
        "text": "Vue 3 dashboard for reviewing reports, assigning rescuers, managing users, content and hospitals, and viewing reports and maps."
      },
      {
        "name": "Backend API",
        "text": "Node.js and Express service with role-based access, push notifications, scheduled jobs, media storage and report generation."
      },
      {
        "name": "Public website",
        "text": "Nuxt site showing the snake catalogue, verified rescuers, hospitals with antivenom stock, a live map and first-aid guidance."
      }
    ],
    "features": [
      {
        "title": "Rescue request tracking",
        "text": "Each report carries location, photo, audio or video and priority, and moves through assignment, rescue, release or handover with status tracking."
      },
      {
        "title": "Rescuer management",
        "text": "Rescuers apply with credentials, are approved by admins, accept or reject cases, and can be reassigned with a recorded history."
      },
      {
        "title": "Species directory",
        "text": "A multilingual snake catalogue with venom type, lookalikes and state filters, available in the app and on the website."
      },
      {
        "title": "Nearby hospital locator",
        "text": "Hospitals are searchable by location and show antivenom stock, which hospitals update and which reminders keep current."
      },
      {
        "title": "Map heatmap dashboards",
        "text": "Admin and public maps show reports, rescuer coverage and hospitals, with heatmap and clustered marker layers."
      },
      {
        "title": "Snake identification help",
        "text": "Users submit photos for expert identification, with optional AI-suggested species that an expert must review before replying."
      },
      {
        "title": "Snakebite case handling",
        "text": "Snakebite cases are recorded and assigned to doctors, with discussion threads and case status tracking."
      },
      {
        "title": "Role-based administration",
        "text": "Super admin, state admin, sub admin and NGO roles scope data by state and district."
      },
      {
        "title": "Reports and notifications",
        "text": "Admins filter and export reports, and push notifications cover case assignment, approvals, events and overdue cases."
      }
    ],
    "workflow": [
      {
        "title": "Public reports a snake",
        "text": "A user submits a report from the app with location, photo and optional audio or video. The report is stored with a case ID and a status of pending."
      },
      {
        "title": "Nearby rescuers are alerted",
        "text": "Push notifications go to relevant rescuers and admins, and a scheduled job raises a reminder and then an urgent escalation if no one accepts the case."
      },
      {
        "title": "Case is assigned and accepted",
        "text": "An admin assigns a rescuer, or a rescuer self-assigns, and the rescuer accepts or rejects. Reassignments are recorded on the case."
      },
      {
        "title": "Rescuer records the rescue",
        "text": "The rescuer submits rescue details with photo, snake species and count, condition of the animal and any delay."
      },
      {
        "title": "Release or handover is logged",
        "text": "The rescuer records a release with photo, video and location, or a handover to a forest authority. Release videos carry location and time metadata for checking."
      },
      {
        "title": "Admins review and report",
        "text": "Admins follow cases in lists, analytics and heatmap dashboards, and export reports filtered by date, state and district."
      }
    ],
    "highlights": [
      "Four codebases share one API: Flutter mobile app, Vue 3 admin panel, Nuxt public website and an Express and MongoDB backend.",
      "Scheduled jobs escalate unassigned rescues and remind hospitals to update antivenom stock, hiding hospitals that stay silent.",
      "Release videos are cross-checked server-side against the reported release location and time, with a mock-location flag from the device.",
      "AI species suggestions are limited to catalogue entries, exclude precise coordinates and never send a reply automatically.",
      "Public website endpoints are rate-limited, cached and restricted to privacy-safe fields."
    ]
  },
  "meetmydoc": {
    "slug": "meetmydoc",
    "title": "MeetMyDoc",
    "client": "Doctor appointment booking",
    "categories": [
      "dev"
    ],
    "summary": "Doctor search by specialization, time-slot booking, online payment, OTP login, a doctor portal and a live token display. Built the website, doctor portal and admin panel.",
    "stack": [
      "Nuxt 3",
      "Vue 3",
      "Node.js",
      "Socket.io",
      "Razorpay"
    ],
    "role": "Developing the website, doctor portal and admin panel with Vue 3, Nuxt 3, Pinia and Tailwind CSS.",
    "overview": "MeetMyDoc is a doctor appointment booking platform that connects patients with doctors and clinics. Patients discover doctors, reserve a time slot and pay online, while doctors, clinic staff and administrators manage schedules, consultations and platform content from dedicated portals.",
    "audience": [
      "Patients and their family members",
      "Doctors",
      "Clinic staff and front-desk teams",
      "Platform administrators"
    ],
    "modules": [
      {
        "name": "Patient website and app",
        "text": "A Nuxt website and a Flutter mobile app for doctor search, booking, payment, appointment history, family members and medical records."
      },
      {
        "name": "Doctor and staff portal",
        "text": "A Vue portal where doctors and clinic staff manage clinics, sessions, appointments, patient visits, prescriptions and reports."
      },
      {
        "name": "Admin panel",
        "text": "A Vue console for approving doctors, managing masters, fees, refunds, website content, notification settings and platform reports."
      },
      {
        "name": "Token display app",
        "text": "A Flutter screen for clinic waiting areas that pairs with a doctor account and shows the token currently being called."
      },
      {
        "name": "Backend API and scheduler",
        "text": "An Express and MongoDB service with Socket.IO, payment and notification integrations, and a separate scheduler process for timed jobs."
      }
    ],
    "features": [
      {
        "title": "Doctor search and discovery",
        "text": "Doctors can be found by specialization, name, category or nearby location, with doctor profiles, favorites and recently booked doctors."
      },
      {
        "title": "Time-slot booking",
        "text": "Patients view a doctor's weekly schedule and available online time slots per clinic and date, then reserve a token for themselves or a family member."
      },
      {
        "title": "Online payment",
        "text": "Booking fees are collected through Razorpay, with server-side payment verification, webhook handling, receipts, refunds and scheduled payment reconciliation."
      },
      {
        "title": "OTP-based patient login",
        "text": "Patients sign in with a phone number and one-time password, with registration, an onboarding questionnaire, guest browsing, and Google and Apple sign-in support."
      },
      {
        "title": "Live token display",
        "text": "When a doctor calls the next patient, the clinic display updates in real time over Socket.IO and the patient receives a push notification."
      },
      {
        "title": "Doctor onboarding and approval",
        "text": "Doctors register, complete profile, location and session details, then wait for administrator verification, with rejection handling."
      },
      {
        "title": "Consultation records",
        "text": "Doctors record vitals, diagnosis and prescriptions per visit, generate prescription PDFs and transfer records between doctors."
      },
      {
        "title": "Reminders and notifications",
        "text": "Push, SMS and email notifications cover appointment schedules, follow-ups and medication reminders, driven by scheduled background jobs."
      },
      {
        "title": "Reports and administration",
        "text": "Role-based reports cover appointments, patients, medicines, payments, SMS usage and doctor logins, alongside refund, fee and content management."
      }
    ],
    "workflow": [
      {
        "title": "Find a doctor",
        "text": "The patient searches by specialization, name or nearby location on the website or app and opens a doctor profile with clinics and schedule."
      },
      {
        "title": "Sign in with OTP",
        "text": "The patient logs in with a phone number and one-time password, or registers and completes the onboarding questionnaire. Guests can browse before signing in."
      },
      {
        "title": "Select clinic, slot and patient",
        "text": "The patient picks a clinic and date, chooses an available time slot and token, and selects the primary patient or a family member."
      },
      {
        "title": "Pay and confirm booking",
        "text": "The booking fee is paid online, the payment is verified on the server, and the appointment is confirmed with a receipt. Free-token appointments skip payment."
      },
      {
        "title": "Receive reminders",
        "text": "Scheduled jobs send appointment reminders by push, SMS or email, and the patient can reschedule or cancel from the Bookings list."
      },
      {
        "title": "Called through live token",
        "text": "The doctor or staff calls the next patient, the clinic token display updates instantly and the patient is notified to proceed."
      },
      {
        "title": "Consultation and records",
        "text": "The doctor completes the consultation, records vitals, diagnosis and prescription, and the patient can open the prescription and history from the app."
      }
    ],
    "highlights": [
      "Four client applications share one Express and MongoDB backend that exposes separate route groups for patient, doctor, staff, admin and token-display clients.",
      "Real-time token display uses Socket.IO rooms per clinic, with a code-based device pairing flow so the display screen needs no login.",
      "Payment handling includes server-side verification, Razorpay webhooks and scheduled reconciliation and failed-payment refund detection.",
      "A dedicated scheduler process runs cron jobs for reminders, no-show updates, medication dose generation and payment checks, separate from the API server.",
      "Backend uses Helmet, rate limiting, input validation and NoSQL-injection sanitisation, and the Flutter apps keep tokens in secure storage."
    ]
  },
  "go-mammal": {
    "slug": "go-mammal",
    "title": "Go Mammal (Mammal Sightings)",
    "client": "Wildlife citizen-science platform",
    "categories": [
      "dev",
      "pm"
    ],
    "summary": "Users report sightings with photos and GPS location, with history, summaries and an admin sightings heatmap. Planned and delivered across the mobile app, website, admin panel and backend.",
    "stack": [
      "Vue 3",
      "Leaflet",
      "Node.js",
      "AWS S3",
      "Project planning"
    ],
    "role": "Developed the Vue front end, including the Leaflet maps, and managed planning and delivery across the app, website, admin panel and backend.",
    "overview": "Go Mammal is a citizen-science platform for recording mammal sightings, with a mobile app, a user website and an admin panel on one shared API. Users log sightings with photos and GPS location, and administrators analyse the data through summaries, maps and exports.",
    "audience": [
      "Citizen scientists and wildlife enthusiasts logging sightings",
      "Researchers and conservation teams analysing sighting data",
      "Platform administrators managing species, users and content"
    ],
    "modules": [
      {
        "name": "Mobile app",
        "text": "Flutter app for registering, adding sightings with photos and location, browsing history and viewing a personal wildlife summary."
      },
      {
        "name": "User website",
        "text": "Vue 3 web version of the app with the same sign-in, sighting, history, summary and profile features."
      },
      {
        "name": "Admin panel",
        "text": "Vue 3 dashboard with sightings, species, users, analytics, notifications and editable policy pages."
      },
      {
        "name": "Backend API",
        "text": "Express and MongoDB service handling authentication, sightings, photo processing, analytics and admin operations."
      }
    ],
    "features": [
      {
        "title": "Record sightings with photos",
        "text": "Users pick a species, count, time, notes and one or more photos, with GPS location or a manual map pin."
      },
      {
        "title": "Photo metadata capture",
        "text": "Photo details such as capture time, device and embedded GPS are read on the server and kept alongside each sighting."
      },
      {
        "title": "Sighting history",
        "text": "Users browse, view, edit and delete their own sightings, with place names filled in from coordinates."
      },
      {
        "title": "Wildlife summary",
        "text": "Each user sees totals and a breakdown of the species and sightings they have recorded."
      },
      {
        "title": "Admin sightings heatmap",
        "text": "Admins view all sightings on a map with heatmap and marker views, filtered by species, date and user."
      },
      {
        "title": "Species management",
        "text": "Admins add, edit, deactivate and bulk-create species in the master list that users select from."
      },
      {
        "title": "Analytics dashboards",
        "text": "Dashboards show species rankings, top locations, top reporters, trends over time and recent sightings."
      },
      {
        "title": "Data export",
        "text": "Admins export filtered sightings as CSV for use in research workflows."
      },
      {
        "title": "Accounts and policy pages",
        "text": "Email OTP registration and password reset, plus admin-editable privacy and terms pages published to the apps."
      }
    ],
    "workflow": [
      {
        "title": "User signs up",
        "text": "A user registers with an email one-time code and sets a password. Sessions use short-lived access tokens with refresh."
      },
      {
        "title": "Sighting is captured",
        "text": "The user chooses a species and adds one or more photos, the animal count and notes. Location comes from GPS or a map picker."
      },
      {
        "title": "Server validates and stores",
        "text": "The API checks the fields, reads photo metadata, converts images to WebP, stores them in cloud storage and resolves a place name."
      },
      {
        "title": "Admins are notified",
        "text": "Each new sighting creates an in-app notification for administrators, with an unread count in the panel."
      },
      {
        "title": "Admin reviews the data",
        "text": "Admins open sighting detail, correct entries if needed, and filter the list by species, date range or reporter."
      },
      {
        "title": "Maps and exports",
        "text": "Sightings appear on the heatmap and in analytics, and can be exported as CSV."
      }
    ],
    "highlights": [
      "One API serves the Flutter app, user website and admin panel, with separate user and admin authentication.",
      "Photo EXIF details are read before WebP conversion and stored per photo, with a flag for mock device locations.",
      "Photo links are signed on the way out, so stored images are not exposed through permanent public URLs.",
      "Rate limiting, input validation, sanitised policy HTML and Helmet headers are applied on the backend."
    ]
  },
  "zeal": {
    "slug": "zeal",
    "title": "Zeal Exam Portal",
    "client": "Overseas exam & e-learning platform",
    "categories": [
      "pm"
    ],
    "summary": "Managed delivery of a platform with role-based access for admins, course managers, teachers and students — live classes, question banks, assessments and results.",
    "stack": [
      "Vue 3",
      "Nuxt 3",
      "Requirements",
      "Release"
    ],
    "role": "Managed delivery from requirement gathering to release: turned the client's proposal and designs into requirement documents, tracked progress against scope, raised scope changes with the client, and coordinated designers, developers and QA.",
    "overview": "Zeal Exam Portal is an overseas exam and e-learning platform that combines course and batch management, live and recorded classes, question banks and online assessments. It serves administrators, course managers, teachers and students, with role-based access and results reporting.",
    "audience": [
      "Super admins and sub admins",
      "Course managers",
      "Teachers",
      "Students preparing for exams"
    ],
    "modules": [
      {
        "name": "Admin portal",
        "text": "A Vue 3 console for departments, courses, batches, timetables, question banks, exams, results, attendance, requests, notifications and reports."
      },
      {
        "name": "Student web portal",
        "text": "A Nuxt 3 portal where students view courses, join online classes, read materials, take exams, review results and raise requests."
      },
      {
        "name": "Mobile app",
        "text": "A Flutter student app, still in progress, covering login, courses, live classes, study materials and notifications."
      },
      {
        "name": "Backend API",
        "text": "An Express and MongoDB API with role and module permissions, Socket.IO notifications, scheduled jobs and Webex, AI and file-storage integrations."
      }
    ],
    "features": [
      {
        "title": "Role and permission control",
        "text": "Five roles plus custom roles use a per-module view, add, edit and delete matrix, and teachers and managers only see courses they are assigned to."
      },
      {
        "title": "Curriculum and batches",
        "text": "Departments, courses, subjects, units and chapters are managed with draft and publish states, and students join batches through manual entry or Excel import."
      },
      {
        "title": "Timetable and live classes",
        "text": "Weekly timetables support online and offline sessions with clash and holiday checks, and Webex meetings are created automatically for online classes."
      },
      {
        "title": "Attendance tracking",
        "text": "Offline attendance is marked manually, while online attendance is synced from Webex participation with present, partial and absent thresholds."
      },
      {
        "title": "Question bank and AI drafts",
        "text": "MCQs are created manually or imported from Excel, and an AI generator can draft questions from study materials for teacher review before approval."
      },
      {
        "title": "Exam delivery",
        "text": "Class tests, mock tests and model exams support negative marking, availability windows, autosave, a heartbeat signal and tracking of tab switches and fullscreen exits."
      },
      {
        "title": "Results and reports",
        "text": "Results are generated automatically with per-question insight, can be published immediately, on schedule or manually, and exported as Excel or PDF reports."
      },
      {
        "title": "Student requests",
        "text": "Students request makeup classes, recording access or re-exams for missed sessions, and staff approve or reject them with notifications in both directions."
      },
      {
        "title": "Notifications",
        "text": "In-app and real-time notifications cover timetable changes, exam reminders, results and scheduled broadcasts targeted by batch, course or role."
      }
    ],
    "workflow": [
      {
        "title": "Set up courses and batches",
        "text": "Administrators create departments, courses and curriculum, assign a course manager and teachers, and create batches."
      },
      {
        "title": "Enroll students",
        "text": "Students are added individually or by Excel import. Each receives a temporary password by email and must reset it on first login."
      },
      {
        "title": "Schedule and attend classes",
        "text": "Teachers publish the timetable. Students join Webex classes from the portal, and attendance is recorded for each session."
      },
      {
        "title": "Build question banks",
        "text": "Teachers add questions manually, by Excel import or through AI-drafted questions that are reviewed before entering the bank."
      },
      {
        "title": "Create and publish exams",
        "text": "Staff use the exam wizard to choose type, duration, marking rules, availability window and questions, then publish to the assigned batches."
      },
      {
        "title": "Student takes the exam",
        "text": "Students start the exam in the web portal with answers autosaved. Integrity events such as tab switches are recorded and the attempt is submitted."
      },
      {
        "title": "Results and follow-up",
        "text": "Results are generated and published per the chosen rule. Students review questions and history, and staff review batch results, reports and re-exam requests."
      }
    ],
    "highlights": [
      "Backend enforces a 14-module permission matrix with course-based data scoping, and an automated test checks every endpoint's role gates for each role.",
      "Webex integration creates meetings automatically and syncs participant attendance, with OAuth tokens encrypted at rest.",
      "Exam sessions include autosave, heartbeat and integrity tracking, plus student-generated mock exams scored immediately.",
      "Socket.IO provides real-time notifications with a polling fallback, and scheduled sweeps handle exam reminders, result publishing and broadcasts.",
      "Study materials and recordings are stored on S3-compatible storage and served through signed file URLs."
    ]
  },
  "leovex": {
    "slug": "leovex",
    "title": "LEOVEX QuizMaster",
    "client": "Subscription quiz platform",
    "categories": [
      "pm"
    ],
    "summary": "Managed a SaaS quiz platform with admin, teacher and student portals, MCQ question banks, exam scheduling, revenue tracking and AI-based proctoring.",
    "stack": [
      "Vue 3",
      "Node.js",
      "Scope",
      "Client comms"
    ],
    "role": "Managed delivery from requirement gathering to release: turned the client's proposal and designs into requirement documents, tracked progress against scope, raised scope changes with the client, and coordinated designers, developers and QA.",
    "overview": "LEOVEX QuizMaster is a SaaS quiz and assessment platform where teachers build question banks, schedule MCQ exams for their batches and review results. Students sit exams on the web or mobile with camera-based proctoring, and administrators manage teachers, exam packs and payments.",
    "audience": [
      "Teachers and tutors running exams",
      "Students taking assigned exams",
      "Platform administrators"
    ],
    "modules": [
      {
        "name": "Staff portal",
        "text": "A Vue web app serving administrators and teachers, with landing and pricing pages, teacher management, batches, question banks, exams, reports and violation review."
      },
      {
        "name": "Student web portal",
        "text": "A Vue web app where students view assigned exams, take them with browser-based face monitoring, and see results and performance charts."
      },
      {
        "name": "Student mobile app",
        "text": "A Flutter app for students with exam attempts, proctoring and screen-capture protection."
      },
      {
        "name": "Backend API and workers",
        "text": "An Express 5 and MongoDB API with Razorpay payments, S3 media storage, and background workers for imports, emails and exam creation."
      }
    ],
    "features": [
      {
        "title": "Teacher and batch management",
        "text": "Administrators create and manage teacher accounts, while teachers organise batches, subjects and students, including bulk student import from Excel."
      },
      {
        "title": "MCQ question banks",
        "text": "Teachers maintain question banks with imports, images, difficulty levels and rich content, and can draw exam questions from them."
      },
      {
        "title": "Flexible exam creation",
        "text": "Exams use fixed questions, a random pool or a difficulty blueprint, with duration, pass percentage, negative marking and scheduled start times."
      },
      {
        "title": "Camera-based proctoring",
        "text": "A face detection model flags missing, multiple or out-of-frame faces during an exam, and violations are saved with a photo for teacher review."
      },
      {
        "title": "Exam credits and payments",
        "text": "Teachers buy exam packs through Razorpay, with signature verification, webhook handling, payment logs and downloadable invoices."
      },
      {
        "title": "Results and publishing",
        "text": "Teachers publish results and answer keys, with scores shown immediately or on publication, and students can review their results."
      },
      {
        "title": "Reports and analytics",
        "text": "Reports break down performance by batch, subject, exam and student, with charts and export to Excel and PDF."
      },
      {
        "title": "Revenue tracking",
        "text": "The admin dashboard shows platform statistics, revenue, payment history and payment logs, with per-teacher usage and monthly reports."
      },
      {
        "title": "Exam controls",
        "text": "Teachers can reschedule or cancel exams, restart or unassign a student's attempt, and toggle camera monitoring per student."
      }
    ],
    "workflow": [
      {
        "title": "Administrator onboards teachers",
        "text": "Administrators create teacher accounts or teachers self-register. Platform settings and exam packs are configured by the administrator."
      },
      {
        "title": "Teacher builds batches",
        "text": "The teacher creates batches and subjects and adds students individually or by Excel import. Students receive login credentials by email."
      },
      {
        "title": "Prepare question bank",
        "text": "The teacher adds MCQs manually or through import and organises them into question banks mapped to subjects."
      },
      {
        "title": "Schedule the exam",
        "text": "The teacher selects batches, question mode, duration, marking and proctoring options, and credits are used when the exam is created. Assigned students are notified."
      },
      {
        "title": "Student attempts the exam",
        "text": "At the scheduled time the student starts the exam on web or mobile. Answers are saved progressively and camera checks run if enabled."
      },
      {
        "title": "Violations are recorded",
        "text": "Tab switches and camera issues raise warnings and are logged with photos, which teachers review in the violations view."
      },
      {
        "title": "Publish results and report",
        "text": "The teacher publishes results and answers. Students view scores while teachers and administrators review reports and revenue."
      }
    ],
    "highlights": [
      "Proctoring runs in the browser using a MediaPipe face detector, with retention sweeps that remove violation photos after a set period.",
      "Exam creation, student import and emails run as background jobs processed by separate worker processes.",
      "Billing is based on purchasable exam credits and packs, replacing an earlier subscription-plan model through a migration script.",
      "The API applies rate limiting, Helmet headers, refresh-token sessions and a minimum app-version gate for the student mobile client.",
      "The mobile app uses Flutter with BLoC, go_router and screen protection to limit screenshots during exams."
    ]
  },
  "silent-valley": {
    "slug": "silent-valley",
    "title": "Silent Valley Spot Booking",
    "client": "Counter booking system",
    "categories": [
      "pm"
    ],
    "summary": "Managed a system covering safari and program bookings, vehicles, GST, payments, refunds, revenue reports, staff and QR ticket verification.",
    "stack": [
      "Payments",
      "QR tickets",
      "Reports",
      "Sprint planning"
    ],
    "role": "Managed delivery from requirement gathering to release: turned the client's proposal and designs into requirement documents, tracked progress against scope, raised scope changes with the client, and coordinated designers, developers and QA.",
    "overview": "Counter and spot-booking system for Silent Valley National Park covering safari and programme bookings, vehicles, GST, payments, revenue reports and QR ticket verification. It serves forest staff at counters and administrators who manage rates and finances.",
    "audience": [
      "Counter staff issuing tickets on the spot",
      "Park administrators and super admins",
      "Guides and drivers assigned to safari vehicles",
      "Accounts staff reviewing collections, GST and revenue",
      "Gate staff verifying tickets by QR scan"
    ],
    "modules": [
      {
        "name": "Admin web dashboard",
        "text": "Next.js and TypeScript console for bookings, programs, rates, vehicles, counters, staff, payments, GST, reports and audit logs."
      },
      {
        "name": "Counter mobile app",
        "text": "Flutter app for spot booking, thermal and PDF ticket printing, QR verification and offline booking with later sync."
      },
      {
        "name": "API backend",
        "text": "NestJS service on MongoDB with JWT authentication, permission guards, financial calculators, reports and scheduled counter automation."
      }
    ],
    "features": [
      {
        "title": "Program and safari booking",
        "text": "Bookings for programs, day packages and safari trips with visitor categories, slots, camera fees and capacity checks."
      },
      {
        "title": "Versioned rates and components",
        "text": "Rate masters with categories and fee components, frozen onto each booking so past bookings never change when rates are edited."
      },
      {
        "title": "Vehicle and guide allocation",
        "text": "Jeeps and buses keep their own seat ledgers per slot and day, with guides, drivers and compliance alerts."
      },
      {
        "title": "GST and billing exports",
        "text": "Configurable GST, round-off handling, GST reports and billing exports for accounts."
      },
      {
        "title": "Payment recording",
        "text": "Counter payments recorded against database-defined payment modes, with EDC payment reports and counter collection settlement."
      },
      {
        "title": "Counter sessions",
        "text": "Counters open and close daily, manually or by schedule, and staff see their own bookings and earnings."
      },
      {
        "title": "Cancellation approval",
        "text": "Full or partial cancellations release capacity, and a request and approval step records who authorised each change."
      },
      {
        "title": "Revenue and operational reports",
        "text": "Collection, revenue allocation by beneficiary, manifests, staff activity and vehicle reports exported to Excel and PDF."
      },
      {
        "title": "Roles, permissions and audit",
        "text": "Role-based permissions, menu control, rate-limited login, password reset by OTP and an audit trail of changes."
      }
    ],
    "workflow": [
      {
        "title": "Staff sign in",
        "text": "Counter staff log in to the app or dashboard, and their role and permissions decide which menus and actions they see."
      },
      {
        "title": "Select program and slot",
        "text": "Staff choose the program, date, slot and visitor category, and the system checks capacity and vehicle seats."
      },
      {
        "title": "Enter visitor details",
        "text": "Visitor names, ages and ID details are captured, with passport details for foreign visitors and camera counts where declared."
      },
      {
        "title": "Calculate and take payment",
        "text": "Rates, fee components, GST and round-off are calculated and frozen on the booking, and the payment mode is recorded."
      },
      {
        "title": "Print ticket",
        "text": "A ticket with a random-token QR code prints on a thermal printer or as PDF, and offline bookings sync once connectivity returns."
      },
      {
        "title": "Verify at entry",
        "text": "Gate staff scan the QR or enter the number, and the server returns the booking details for verification."
      },
      {
        "title": "Reconcile and report",
        "text": "Counters close for the day, and administrators review collection, GST, revenue and manifest reports."
      }
    ],
    "highlights": [
      "Booking amounts are stored as a frozen snapshot of rates, GST and components, so reports stay accurate after later rate changes.",
      "The Flutter app uses a local database and outbox queue so counters can keep booking offline and sync later.",
      "Ticket QR codes hold only an opaque random token, so nothing readable or forgeable is printed on the ticket.",
      "Per-vehicle seat ledgers keyed by program, slot and day enforce capacity without manual release steps.",
      "Scheduled automation opens and closes counters daily, with unique session indexes keeping repeated runs safe."
    ]
  },
  "mvs": {
    "slug": "mvs",
    "title": "MVS — Mobile Veterinary Service",
    "client": "Veterinary services platform",
    "categories": [
      "pm"
    ],
    "summary": "Managed a phased delivery of a mobile veterinary service platform: a mobile app, a role-based admin panel and an API backend, from setup through release.",
    "stack": [
      "Flutter",
      "Vue 3",
      "Node.js",
      "MongoDB",
      "Sprint planning"
    ],
    "role": "Managed delivery from requirement gathering to release: turned the client's proposal and designs into requirement documents, tracked progress against scope, raised scope changes with the client, and coordinated designers, developers and QA.",
    "overview": "MVS is a mobile veterinary service platform that coordinates field doctors and drivers treating animals in the field. A mobile app handles fieldwork, an admin panel handles oversight, and a shared API ties dispatch, case records, treatments and live tracking together.",
    "audience": [
      "Field veterinary doctors",
      "Unit drivers",
      "Administrators and supervisors",
      "Custom-role staff such as reviewers or analysts"
    ],
    "modules": [
      {
        "name": "Mobile app (Flutter)",
        "text": "Used by doctors and drivers for registration, unit start-up, case entry, treatments, media capture, GPS tracking and notifications, with offline storage and background sync."
      },
      {
        "name": "Admin panel (Vue 3 + TypeScript)",
        "text": "Web console for dashboards, dispatch, live tracking, animal records, daily review, analytics and user, vehicle and role management."
      },
      {
        "name": "Backend API (Node/Express/MongoDB)",
        "text": "Versioned REST API with permission-based access, real-time socket updates, email OTP, media storage and OCR for odometer photos."
      }
    ],
    "features": [
      {
        "title": "Dynamic roles and permissions",
        "text": "Admins build custom roles from module-and-action permissions, such as cases:edit, and the API and admin menus enforce them."
      },
      {
        "title": "Approval-based onboarding",
        "text": "Doctors and drivers verify email by OTP, submit a multi-step registration with documents, and wait for admin approval, rejection or change requests."
      },
      {
        "title": "Unit start and dispatch",
        "text": "A unit is dispatched with a vehicle, doctor and driver, a readiness checklist, fuel and network status, and an odometer photo read by OCR."
      },
      {
        "title": "Animal case records",
        "text": "Cases capture category, ownership, species, location, vitals, health scores and photos, with a numbered case history."
      },
      {
        "title": "Treatments and follow-ups",
        "text": "Doctors record diagnosis, medicines, media and voice notes, and schedule follow-up visits that appear in a follow-up history."
      },
      {
        "title": "Doctor approval of changes",
        "text": "Case entries and edits made by drivers are held as pending updates until the assigned doctor reviews and approves or rejects them."
      },
      {
        "title": "Live tracking and checkpoints",
        "text": "Units report GPS locations and case checkpoints with reverse-geocoded addresses, shown on a map with route history in the admin panel."
      },
      {
        "title": "Offline-first field sync",
        "text": "The app stores records locally and a sync engine uploads them on reconnection and at regular intervals."
      },
      {
        "title": "Analytics and exports",
        "text": "Dashboards, daily review and analytics pages summarise activity, with Excel and PDF export libraries in the admin panel."
      }
    ],
    "workflow": [
      {
        "title": "Register and get approved",
        "text": "A doctor or driver verifies email by OTP, completes the registration wizard in the app, and an administrator approves the request and assigns a role."
      },
      {
        "title": "Start a unit",
        "text": "The driver completes the readiness checklist, selects the vehicle, doctor and assignment, photographs the odometer and dispatches the unit."
      },
      {
        "title": "Track the unit in the field",
        "text": "The app streams GPS positions and checkpoints, queuing them offline when there is no signal, and administrators watch the unit on the live map."
      },
      {
        "title": "Register the animal case",
        "text": "Case details, location, vitals and photos are entered in the app. Driver-created entries go to the assigned doctor for approval."
      },
      {
        "title": "Record treatment",
        "text": "The doctor documents diagnosis, medicines and media, and schedules follow-up visits where further care is needed."
      },
      {
        "title": "Review and close",
        "text": "Doctors approve pending changes and complete a daily review, while the unit ends its run and the case status moves toward closure."
      },
      {
        "title": "Report and audit",
        "text": "Administrators use the dashboard, analytics and animal records to monitor operations and export reports."
      }
    ],
    "highlights": [
      "Permission model of 13 modules by 4 actions drives both API guards and admin navigation, so new roles need no code change.",
      "A security hardening pass moved auth tokens to httpOnly cookies with silent refresh, added ownership checks, input validation and rate limiting.",
      "Offline-first mobile design uses local SQLite storage, a single sync engine and background location services for patchy field connectivity.",
      "Real-time socket connections push notifications, secured with JWT verification, and OCR reads odometer readings from photos."
    ]
  },
  "gwf": {
    "slug": "gwf",
    "title": "GWF — Global Wildlife Fair",
    "client": "Fair, auctions & community platform",
    "categories": [
      "pm"
    ],
    "summary": "Managing a multi-phase programme: a visitor and exhibitor mobile app, an admin web portal and a microservices backend, including in-app auctions and a wildlife community network.",
    "stack": [
      "Flutter",
      "Vue 3",
      "Node.js",
      "Microservices",
      "Phased roadmap"
    ],
    "role": "Managed delivery from requirement gathering to release: turned the client's proposal and designs into requirement documents, tracked progress against scope, raised scope changes with the client, and coordinated designers, developers and QA.",
    "overview": "GWF is the digital platform for the Global Wildlife Fair and the India Wildlife Network community. A Flutter app serves visitors, exhibitors, NGOs and speakers, a Vue admin panel serves organisers, and a microservice backend powers events, partner profiles, payments, community and in-app auctions.",
    "audience": [
      "Fair visitors",
      "Exhibitors, NGOs, sponsors and speakers",
      "Film makers, media and volunteers",
      "IWN community members and auction buyers or sellers",
      "GWF organisers and administrators"
    ],
    "modules": [
      {
        "name": "Mobile app (Flutter)",
        "text": "Bloc and clean-architecture app covering schedule, venue map, QR pass, exhibitors, NGOs, speakers, films, networking, community and the auction marketplace."
      },
      {
        "name": "Admin panel (Vue 3)",
        "text": "Back-office with about three dozen feature areas for approvals, events, home content, partners, finance, community moderation and auction operations."
      },
      {
        "name": "Microservice backend",
        "text": "Node/Express services behind one API gateway for auth, home, events, partners, payments, notifications, community and auctions, sharing one model package."
      },
      {
        "name": "Messaging and real-time layer",
        "text": "RabbitMQ feeds the notification service, and the auction service runs a Socket.IO channel for live bid updates."
      }
    ],
    "features": [
      {
        "title": "Fair schedule and calendar",
        "text": "Visitors browse events and sessions, book places, build a personal calendar with calendar export, and use an interactive venue map."
      },
      {
        "title": "QR pass and check-in",
        "text": "Registered visitors carry a QR pass that staff scan at sessions through a check-in screen with a session picker."
      },
      {
        "title": "Partner profiles with approval",
        "text": "Exhibitors, NGOs and speakers apply, are approved by admins, and edits to published profiles wait as pending changes until approved."
      },
      {
        "title": "Exhibitor tools",
        "text": "Exhibitors book stands, claim presentation slots, receive leads, view booth analytics, and attendees can favourite them and arrange B2B meetings."
      },
      {
        "title": "Films, walks and photo awards",
        "text": "Film submissions and screenings, nature walks and a photo competition with entries, jury and voting extend the fair programme."
      },
      {
        "title": "IWN communities",
        "text": "Members join communities, post, comment, and use jobs and meetups, with request handling and moderation in the admin panel."
      },
      {
        "title": "In-app auction marketplace",
        "text": "Approved sellers list items or services, buyers bid in auctions with anti-sniping extension, reserve handling, watchlists and outbid alerts."
      },
      {
        "title": "Auction payments and payouts",
        "text": "Winners get an order with a payment window and pay through the payment service, and admins track settlements, reconciliation and exports."
      },
      {
        "title": "Role and permission access",
        "text": "Users can hold several roles, with fine-grained permissions guarding admin pages and API routes, and an audit log on auction admin actions."
      }
    ],
    "workflow": [
      {
        "title": "Visitor signs up",
        "text": "A visitor registers by email OTP or social sign-in and is assigned a role. The app and admin panel both talk to the same API gateway."
      },
      {
        "title": "Seller applies and lists",
        "text": "A seller applies in the app, is approved by an admin, then submits a listing with photos, section, reserve and tax details for moderation."
      },
      {
        "title": "Admin approves and schedules",
        "text": "Admins review listings, group them into scheduled auctions, and the listings open automatically at their start time."
      },
      {
        "title": "Bidders place bids",
        "text": "Registered users bid above the minimum increment. Late bids extend the end time, and live price updates arrive over a socket with polling as fallback."
      },
      {
        "title": "Auction closes with a winner",
        "text": "A scheduled job closes ended auctions, applies the reserve, picks the winner, creates an order and sends a won notification."
      },
      {
        "title": "Winner pays online",
        "text": "The winner adds a delivery address and pays through the checkout flow within a payment window. Gateway webhooks mark the order paid or failed."
      },
      {
        "title": "Delivery and settlement",
        "text": "The buyer confirms delivery, then accounts record the seller payout, with unpaid items offered to the next bidder or relisted by an admin."
      }
    ],
    "highlights": [
      "Single shared model package and gateway-only public access, with internal service-to-service routes blocked at the gateway.",
      "Approval plugin lets published profiles be edited safely: changes stay pending until an admin approves them in the admin panel.",
      "Auction engine handles near-simultaneous bids, anti-sniping, reserves, payment expiry and repeatable scheduled jobs that are safe to run on multiple copies.",
      "Auction admin has an audit trail, a finance reconciliation against payment records, and CSV or PDF exports per currency.",
      "Large automated test suites exist across backend services, the admin panel and the Flutter app."
    ]
  },
  "wildwatch": {
    "slug": "wildwatch",
    "title": "Wildwatch",
    "client": "Kerala Forest Department",
    "categories": [
      "dev"
    ],
    "summary": "Human–wildlife conflict mitigation and incident reporting app for field-level reporting and response coordination.",
    "stack": [
      "Mobile",
      "Incident reporting",
      "Field ops"
    ],
    "role": "Worked on the app's development.",
    "overview": "Wildwatch is an app built for the Kerala Forest Department to help reduce human-wildlife conflict. It supports field-level incident reporting and response coordination.",
    "audience": [
      "Forest Department field staff",
      "Officers coordinating responses"
    ],
    "features": [
      {
        "title": "Field-level incident reporting",
        "text": "Conflict incidents are reported from the field through the app."
      },
      {
        "title": "Response coordination",
        "text": "Reports support coordination of the response between the people involved."
      },
      {
        "title": "Conflict mitigation",
        "text": "Built to support the department's efforts to mitigate human-wildlife conflict."
      }
    ],
    "highlights": [
      "Developed for the Kerala Forest Department.",
      "Focused on human-wildlife conflict mitigation, covering both incident reporting and response coordination."
    ]
  },
  "bizezee": {
    "slug": "bizezee",
    "title": "Bizezee",
    "client": "Salon booking & management",
    "categories": [
      "dev"
    ],
    "summary": "Salon booking and management app with service setup, booking workflows and payment integration.",
    "stack": [
      "Booking",
      "Payments"
    ],
    "role": "Worked on the app's development.",
    "overview": "Bizezee is a salon booking and management platform with an owner-facing admin app, a platform admin panel, a booking website and a backend API. It lets salons set up services and staff, take bookings and payments, and run day-to-day operations from one place.",
    "audience": [
      "Salon owners and managers",
      "Salon staff and professionals",
      "Clients booking appointments",
      "Platform administrators"
    ],
    "modules": [
      {
        "name": "Backend API",
        "text": "Node.js, Express and MongoDB service handling bookings, checkout, payments, subscriptions, notifications, reports and scheduled jobs."
      },
      {
        "name": "Business admin app",
        "text": "Flutter app and Vue web console where salon owners manage services, team, clients, sales, inventory and marketing."
      },
      {
        "name": "Platform admin panel",
        "text": "Vue panel for administrators to manage businesses, subscriptions, add-ons, amenities, gift cards, blogs and marketing."
      },
      {
        "name": "Booking website",
        "text": "Nuxt site and client app where customers discover salons and book appointments."
      }
    ],
    "features": [
      {
        "title": "Guided business onboarding",
        "text": "New salons are guided through business details, location, services and team size."
      },
      {
        "title": "Service and pricing setup",
        "text": "Categories, services and add-ons can be configured, including bulk import and tax settings."
      },
      {
        "title": "Staff scheduling and availability",
        "text": "Bookings check staff availability and support multiple professionals per service."
      },
      {
        "title": "Online and walk-in bookings",
        "text": "Appointments can be made online by clients or recorded in-store as walk-in sales."
      },
      {
        "title": "Online payments",
        "text": "Razorpay integration handles payment orders and status updates for bookings and subscriptions."
      },
      {
        "title": "Discounts and memberships",
        "text": "Promotions, flash sales, last-minute and smart pricing, memberships and gift cards apply to bookings."
      },
      {
        "title": "Invoices and reports",
        "text": "Invoices are generated as PDFs and sales and staff reports can be scheduled by email."
      },
      {
        "title": "Client marketing and notifications",
        "text": "Campaigns and reminders go out through push notifications, email, SMS and WhatsApp."
      },
      {
        "title": "Subscriptions for salons",
        "text": "Businesses subscribe to plans and add-ons managed from the admin panel."
      }
    ],
    "workflow": [
      {
        "title": "Onboard the salon",
        "text": "The owner signs up and completes onboarding with business details, location, services and team size."
      },
      {
        "title": "Set up services and team",
        "text": "Services, pricing, add-ons and staff are configured so the salon can accept bookings."
      },
      {
        "title": "Client picks services",
        "text": "A client finds the salon, chooses services and any add-ons, and selects a professional."
      },
      {
        "title": "Choose a time slot",
        "text": "Available slots are calculated from service duration and staff availability, and the client selects one."
      },
      {
        "title": "Review and pay",
        "text": "The client reviews the cart, applies offers and pays, or the salon records a walk-in sale."
      },
      {
        "title": "Serve and check out",
        "text": "Staff complete the appointment, checkout is recorded and an invoice is generated."
      },
      {
        "title": "Track and re-engage",
        "text": "Owners review reports and run marketing campaigns and reminders to bring clients back."
      }
    ],
    "highlights": [
      "Multi-part platform: Node.js API, Flutter app, Vue admin consoles and a Nuxt website.",
      "Scheduled jobs handle reminders, expiries, no-show status, campaigns and report emails.",
      "Pricing engine supports promotions, memberships, gift cards and time-based discounts.",
      "Role-based areas for admins, salon owners, staff and clients, with Google and Apple sign-in options."
    ]
  },
  "kfdc": {
    "slug": "kfdc",
    "title": "KFDC Ecotourism Website",
    "client": "Kerala Forest Development Corporation",
    "categories": [
      "dev"
    ],
    "summary": "Performance audit and optimisation of a high-traffic ecotourism booking portal: fixed loading bottlenecks, and scoped a modern homepage redesign and an SEO roadmap for bilingual English/Malayalam pages.",
    "stack": [
      "Laravel",
      "MySQL",
      "Performance",
      "SEO"
    ],
    "role": "Audited performance, applied the first fixes, and scoped the homepage redesign and SEO roadmap.",
    "overview": "Public ecotourism portal for Kerala Forest Development Corporation, built on Laravel and MySQL. Guests and registered travel agents book forest stays, day programs and workation packages online, while staff run inventory, check-ins, reports and content from an admin portal.",
    "audience": [
      "Tourists booking stays and day programs",
      "Registered travel agents making B2B reservations",
      "KFDC staff running bookings, check-ins and reports",
      "Property and destination administrators",
      "Visitors reading about destinations, activities and news"
    ],
    "modules": [
      {
        "name": "Public booking website",
        "text": "Bilingual English and Malayalam site with destinations, property search, cart, booking, payment, reviews, gallery, news, FAQs and policy pages."
      },
      {
        "name": "Travel agent portal",
        "text": "Agent registration with OTP, document upload, renewal, sub-user login, certificate, ID card and entry pass views."
      },
      {
        "name": "Admin portal",
        "text": "Role-based back office for properties, rooms, rates, seasons, day programs, bookings, check-ins, coupons, content, reports and settings."
      },
      {
        "name": "Background services",
        "text": "Queued email, SMS and WhatsApp notifications plus scheduled maintenance, cache warm-up and expiry jobs."
      }
    ],
    "features": [
      {
        "title": "Stay search and booking",
        "text": "Guests search properties by destination and dates, view rooms, rates and amenities, and book with live room availability."
      },
      {
        "title": "Day programs and workation",
        "text": "Separate flows book day programs and workation stays, with their own rates and ticket availability checks."
      },
      {
        "title": "Seasonal rate management",
        "text": "Stay and program rates vary by season, room type and guest counts, with taxes, holidays and blackout dates applied."
      },
      {
        "title": "Coupons and offers",
        "text": "Coupon codes and percentage discounts are validated at checkout, alongside offers and package listings."
      },
      {
        "title": "Multiple payment gateways",
        "text": "Payments run through SBI ePay, Easebuzz or Cashfree with webhooks, status pages and part or full payment of dues."
      },
      {
        "title": "Double-booking protection",
        "text": "Room and program inventory is locked in a database transaction, and unpaid bookings hold inventory briefly."
      },
      {
        "title": "Travel agent onboarding",
        "text": "Agents register with OTP verification, submit firm documents and pay registration or renewal fees online."
      },
      {
        "title": "Check-in and check-out",
        "text": "Staff look up bookings, record guest check-in and check-out, and print booking and invoice documents."
      },
      {
        "title": "Reports and exports",
        "text": "Booking, check-in, transaction, travel agent and user reports export to Excel, with dashboards for occupancy."
      }
    ],
    "workflow": [
      {
        "title": "Search destinations",
        "text": "A visitor chooses a destination, dates and guests, and the site lists matching properties, day programs or workation options."
      },
      {
        "title": "Check rooms and rates",
        "text": "The system calculates rates for the season and guest mix, checks room availability and blackout dates, and applies any coupon."
      },
      {
        "title": "Add to cart and register",
        "text": "Selections go into the cart, and the visitor signs in or registers with an OTP, entering guest details."
      },
      {
        "title": "Confirm and pay",
        "text": "The booking is created under an inventory lock and the visitor pays through a gateway, in full or as an advance with later dues."
      },
      {
        "title": "Receive confirmation",
        "text": "Queued jobs send email, SMS and WhatsApp confirmations, and the booking and invoice stay available in the user's account."
      },
      {
        "title": "Stay and check in",
        "text": "Staff verify the booking at the property and record check-in and check-out in the admin portal."
      },
      {
        "title": "Review and report",
        "text": "Guests can leave a review, and administrators review booking, payment and occupancy reports and send payment reminders."
      }
    ],
    "highlights": [
      "Laravel 10 with MySQL, using Passport and Sanctum for authentication and role-based permissions in the admin portal.",
      "Three payment gateway integrations (SBI ePay, Easebuzz, Cashfree) with webhook handling and payment logs.",
      "A booking inventory service serialises concurrent reservations with row locks and temporary holds on unpaid bookings.",
      "Performance work covered gallery media loading, query eager loading, queue-based notifications and scheduled database maintenance.",
      "Bilingual content, a dynamic sitemap and rate-limited, bot-blocking middleware support search visibility and stability."
    ]
  },
  "snakebite": {
    "slug": "snakebite",
    "title": "Snakebite Incidents Dashboard",
    "client": "Snakebite incident data platform",
    "categories": [
      "dev"
    ],
    "summary": "Dashboard of snakebite incidents in India reported in the media: filters and search, breakdown panels, a sortable incident table with CSV export, and a district-level map with side-by-side comparison.",
    "stack": [
      "Nuxt 4",
      "Tailwind CSS",
      "d3-geo",
      "Express",
      "MongoDB"
    ],
    "role": "Developed the dashboard's front end and API.",
    "overview": "The Snakebite Incidents Dashboard presents snakebite incidents in India that were reported in news media, drawn from a curated incident database. It lets analysts filter, compare and download the data, with caveats shown next to the figures so partial reporting is not misread.",
    "audience": [
      "Public health researchers and analysts",
      "Snakebite initiative project team",
      "Conservation and policy professionals"
    ],
    "modules": [
      {
        "name": "Dashboard frontend",
        "text": "Nuxt 4 app with server-side rendering, Tailwind styling, filters, headline figures, breakdown panels and a sortable incident table."
      },
      {
        "name": "District map",
        "text": "Interactive SVG map built with d3 from official boundary data, shading districts by chosen measures with side-by-side comparison."
      },
      {
        "name": "Read-only API",
        "text": "Express service that queries the incident database read-only, validates filters, caches responses and streams CSV exports."
      }
    ],
    "features": [
      {
        "title": "Headline figures",
        "text": "Key counts such as incidents, victims and deaths, plus shares for first contact and antivenom use where the article states them."
      },
      {
        "title": "Twelve filters plus search",
        "text": "Filters cover state, district, month, setting, activity, species, language, outcome and more, with free-text search."
      },
      {
        "title": "Breakdown panels",
        "text": "Eleven panels break incidents down by state, month, setting, activity, species, first place of care, antivenom, language, age group and sex."
      },
      {
        "title": "Sortable incident table",
        "text": "Paged, sortable rows open a full incident record with the details extracted from the source article."
      },
      {
        "title": "CSV download",
        "text": "The filtered incidents download as CSV in the same layout as the initiative's published file."
      },
      {
        "title": "District map shading",
        "text": "Districts are shaded by incidents, deaths, non-medical first contact share or antivenom share, with a minimum-incidents slider."
      },
      {
        "title": "Compare maps",
        "text": "Two maps drawn on one shared scale contrast groups, such as non-medical first contact against medical, or ritual treatment against none reported."
      },
      {
        "title": "Shareable filter links",
        "text": "All filters, sorting and map options live in the URL, so a link reproduces the same view."
      },
      {
        "title": "Caveats and attribution",
        "text": "Reading caveats, data licence and attribution are shown with the figures, and missing values appear as not stated."
      }
    ],
    "workflow": [
      {
        "title": "Data team publishes refreshes",
        "text": "The incident database is refreshed on a regular schedule, with each article extracted into structured incident records."
      },
      {
        "title": "API detects new data",
        "text": "The read-only backend checks the data version periodically and clears its cache when the data changes."
      },
      {
        "title": "Admin signs in",
        "text": "The site is restricted to a single admin account. Token-based sign-in protects every data endpoint, with attempt limiting."
      },
      {
        "title": "User applies filters",
        "text": "Filters are validated on the server and written to the page URL, then the figures, panels and table update together."
      },
      {
        "title": "User explores incidents or the map",
        "text": "The table opens full records, while the map shades districts and zooms to a chosen state or compares two groups."
      },
      {
        "title": "Data is exported",
        "text": "The filtered selection downloads as CSV, with attribution and caveats kept alongside the data."
      }
    ],
    "highlights": [
      "Missing values are treated as not stated rather than no, and share figures use only records where the article gave the answer.",
      "Districts join to map shapes by official district code, not by name, avoiding mismatches from spelling and renamed districts.",
      "The map uses only the Survey of India national boundary and own GeoJSON, with no third-party map tiles.",
      "The backend has read-only database access, validated filter parsing, response caching keyed to the data version and an automated test suite."
    ]
  },
  "pethe": {
    "slug": "pethe",
    "title": "Pethe Barakshar",
    "client": "Education & learning platform",
    "categories": [
      "dev",
      "pm"
    ],
    "summary": "Built and managed an education platform: a student-facing learning site, an admin panel with analytics, and a microservices backend covering authentication, notifications, reports and website content.",
    "stack": [
      "Nuxt 3",
      "Vue 3",
      "Highcharts",
      "Microservices",
      "MongoDB"
    ],
    "role": "Developed the application and managed its delivery, from requirements through to release.",
    "overview": "Pethe Barakshar is an online education platform where learners browse courses, purchase them and study through video lectures, assessments and certificates. An administrator console manages courses, students, website content, payments and analytics on a microservices backend.",
    "audience": [
      "Learners enrolling in courses",
      "Guest visitors browsing the catalogue",
      "Administrators and content managers"
    ],
    "modules": [
      {
        "name": "Learning website",
        "text": "A Nuxt 3 student site with course catalogue, cart and checkout, a learning area for lectures and assessments, certificates and profiles."
      },
      {
        "name": "Admin panel",
        "text": "A Vue panel with Highcharts dashboards for courses, modules and lectures, students, reports, website content, payment audits, and SMS and email logs."
      },
      {
        "name": "Microservices backend",
        "text": "An API gateway with auth, course, notification, report and website services, connected through Kafka events and backed by MongoDB."
      },
      {
        "name": "Video watermark service",
        "text": "A Node service that uses ffmpeg to apply a watermark to uploaded course videos stored in S3-compatible storage."
      }
    ],
    "features": [
      {
        "title": "Course catalogue and discovery",
        "text": "Visitors browse courses by category, level and tag, view course details and instructors, and can use the site as a guest."
      },
      {
        "title": "Cart and checkout",
        "text": "Learners add several courses to a cart, merge it after login, and pay through Razorpay with server-side verification, webhooks and tax-aware invoices."
      },
      {
        "title": "Structured learning",
        "text": "Courses are organised into modules and lectures with videos and downloadable reading material, and learners track progress per course."
      },
      {
        "title": "Assessments and certificates",
        "text": "Courses include question-bank based assessments with passing percentages, and learners can generate and download completion certificates as PDF."
      },
      {
        "title": "OTP and password authentication",
        "text": "Registration and login use OTP verification, with password reset, profile editing, device-bound sessions and country-aware access."
      },
      {
        "title": "Reviews and feedback",
        "text": "Learners can submit course reviews and site feedback, which administrators moderate before they are shown."
      },
      {
        "title": "Admin analytics",
        "text": "Dashboards and reports summarise courses, enrollments, students and purchases with charts, and administrators can enroll students manually."
      },
      {
        "title": "Website content management",
        "text": "Administrators edit home, about, gallery, contact, policy and disclaimer content from the panel without code changes."
      },
      {
        "title": "Notification and audit tools",
        "text": "Email and SMS logs, SMS quota tracking, webhook logs and daily payment audits give administrators visibility into messaging and payments."
      }
    ],
    "workflow": [
      {
        "title": "Browse and register",
        "text": "A visitor explores courses as a guest, then registers or logs in with OTP verification. The guest cart is merged into the account."
      },
      {
        "title": "Add courses to cart",
        "text": "The learner reviews course details, adds one or more courses to the cart and sees totals with discounts and taxes."
      },
      {
        "title": "Pay at checkout",
        "text": "A Razorpay order is created for the cart. After payment the server verifies it, and a webhook and reconciliation worker cover interrupted payments."
      },
      {
        "title": "Enrollment and confirmation",
        "text": "A successful purchase enrolls the learner, generates an invoice, and triggers a confirmation email through an event sent to the notification service."
      },
      {
        "title": "Study course content",
        "text": "The learner works through modules and lectures, watches videos, downloads reading material and progress is tracked."
      },
      {
        "title": "Take assessment",
        "text": "The learner starts the course assessment, answers are saved and submitted, and the result is compared with the passing percentage."
      },
      {
        "title": "Earn certificate",
        "text": "On completion the learner issues a certificate, views or downloads it as PDF, and may leave a review."
      }
    ],
    "highlights": [
      "Services communicate through Kafka using transactional outbox and inbox collections, so events such as enrollments and notifications are stored before delivery and processed idempotently.",
      "The API gateway handles role-based JWT checks for guests, users and administrators, rate limiting, and device-bound user sessions.",
      "Payments include webhook logging, a reconciliation worker for stuck purchases and a daily payment audit with a manual check tool.",
      "Report data is built in a separate read-focused service that consumes events, keeping reporting off the transactional course service.",
      "Services are containerised with Docker Compose and apply Helmet, XSS and NoSQL-injection protections."
    ]
  },
  "jewelbiz": {
    "slug": "jewelbiz",
    "title": "JewelBiz",
    "client": "Jewellery business management",
    "categories": [
      "dev",
      "pm"
    ],
    "summary": "End-to-end jewellery retail system covering sales, purchases, old-gold processing, karigar and repair jobs, gold schemes, accounting entries, role-based access and audit logs.",
    "stack": [
      "Vue 2",
      "Vuetify",
      "Node.js",
      "MongoDB",
      "ApexCharts"
    ],
    "role": "Developed the application and managed its delivery, from requirements through to release.",
    "overview": "JewelBiz is a multi-shop business management system for jewellery retailers. It covers stock purchasing, billing, old gold processing, karigar and repair work, gold savings schemes and accounting, so owners and counter staff can run a shop and keep books from one web application.",
    "audience": [
      "Jewellery shop owners (shop admins)",
      "Counter and billing staff",
      "Platform super admins who onboard shops",
      "Accounts and stock managers"
    ],
    "modules": [
      {
        "name": "Shop admin console",
        "text": "Setup of staff, roles, categories, designs, suppliers and rates, plus purchases, stock, karigar and repair jobs, and accounting reports."
      },
      {
        "name": "Staff workspace",
        "text": "Counter-facing screens for estimates, sales bills, old gold intake, returns, gold scheme enrolment and payments, and old gold acid processing."
      },
      {
        "name": "Super admin area",
        "text": "Platform-level pages for onboarding shops, managing menus, reviewing demo requests, platform admins and the super admin audit log."
      },
      {
        "name": "Express and MongoDB API",
        "text": "Mongoose-backed REST API with role checks, per-shop data separation, PDF invoice generation, automatic accounting postings and scheduled daily jobs."
      }
    ],
    "features": [
      {
        "title": "Estimates and sales billing",
        "text": "Staff create estimates and GST or non-GST bills with weight-based items, stone weights, old gold exchange, returns and multiple payment modes."
      },
      {
        "title": "Purchase and stock control",
        "text": "Stock is purchased from suppliers with item codes, tracked in stock and valuation views, and moved by issue and receipt vouchers and conversions."
      },
      {
        "title": "Old gold processing",
        "text": "Old gold taken on sales is batched, sent for acid melting, and received back with purity so fine gold can be credited."
      },
      {
        "title": "Karigar and repair jobs",
        "text": "Materials sent to karigars are tracked with weights and wastage settlement, and customer repairs move from intake to delivery."
      },
      {
        "title": "Gold savings schemes",
        "text": "Shops define schemes, enrol customers, record instalments and redeem balances against bills, with reports on scheme activity."
      },
      {
        "title": "Discount approvals",
        "text": "Discounts above a shop-configured threshold create a pending approval for the owner instead of passing silently."
      },
      {
        "title": "Automatic accounting",
        "text": "Sales, purchases, supplier payments and scheme instalments post double-entry lines that feed trial balance, profit and loss and balance sheet."
      },
      {
        "title": "Role-based menus and audit logs",
        "text": "Roles are mapped to menus and submenus per shop, and changes to key records are written to an audit log."
      },
      {
        "title": "Reports and statements",
        "text": "Daily sales, stock, salesman-wise, supplier, creditor, advances and customer statement reports support daily closing and review."
      }
    ],
    "workflow": [
      {
        "title": "Onboard shop and staff",
        "text": "A super admin creates the shop account, then the shop admin adds staff, roles and menu access, categories, suppliers and the daily metal rates."
      },
      {
        "title": "Purchase and stock items",
        "text": "Stock is bought from suppliers, items receive codes, and supplier balances and payments are tracked through purchase and issue-receipt vouchers."
      },
      {
        "title": "Estimate and bill the customer",
        "text": "Staff scan or select items, prepare an estimate, then convert it into a GST or non-GST bill with old gold exchange, returns or scheme balance applied."
      },
      {
        "title": "Approve discounts and collect payment",
        "text": "Large discounts wait for owner approval. Payments are recorded by mode, and the invoice is generated as a PDF for the customer."
      },
      {
        "title": "Process old gold",
        "text": "Old gold collected is grouped into batches, sent for acid melting, and the returned weight and purity are recorded as fine gold for settlement."
      },
      {
        "title": "Post to the books",
        "text": "Each document automatically posts accounting entries, so trial balance, profit and loss and balance sheet stay current."
      },
      {
        "title": "Review and audit",
        "text": "Owners check the daily summary, stock valuation and reports, and use the audit log to trace edits."
      }
    ],
    "highlights": [
      "Multi-tenant design: shop data is scoped by a shop identifier, with separate super admin, shop admin and staff roles plus configurable sub-roles.",
      "Idempotent accounting engine rebuilds ledger entries from source documents, so books can be regenerated from sales, purchases and payments.",
      "Domain-specific modelling covers weights, wastage, touch (purity) and thankam (fine gold) rather than generic inventory.",
      "Scheduled jobs capture daily balances and snapshots, and PDF invoices and vouchers are generated server-side."
    ]
  },
  "jumbo-radar": {
    "slug": "jumbo-radar",
    "title": "Jumbo Radar",
    "client": "Human–elephant conflict monitoring",
    "categories": [
      "dev",
      "pm"
    ],
    "summary": "A tool to monitor elephants and reduce human–elephant conflict: an admin dashboard with divisions and ranges, field reporting forms, push notifications, PDF reports and a public website.",
    "stack": [
      "Vue 3",
      "Tailwind CSS",
      "Node.js",
      "Firebase",
      "PDF reports"
    ],
    "role": "Developed the application and managed its delivery, from requirements through to release.",
    "overview": "Jumbo Radar is a tool for monitoring elephants outside protected areas and collecting data that can reduce human-elephant conflict. Field staff and local informants submit sightings and conflict events, and forest managers and researchers review them on a web dashboard.",
    "audience": [
      "Forest department field staff and local informants",
      "Division and range managers",
      "Researchers identifying individual elephants",
      "State and super administrators"
    ],
    "modules": [
      {
        "name": "Admin dashboard",
        "text": "Vue 3 web app for reviewing reports, managing elephants, divisions, ranges, users and forms, and viewing maps and graphs."
      },
      {
        "name": "Backend API",
        "text": "Node.js, Express and MongoDB service with role-based access, photo storage, push notifications, scheduled jobs and PDF reports."
      },
      {
        "name": "Public website",
        "text": "Vue site describing the project, how it works, demo videos and a privacy policy."
      }
    ],
    "features": [
      {
        "title": "Sighting and conflict reports",
        "text": "Reports capture location, photos, elephant counts and behaviour, and conflict details such as crop or property damage."
      },
      {
        "title": "Customisable forms",
        "text": "Each division can define its own report questions, so data collection fits local conditions."
      },
      {
        "title": "Divisions and ranges",
        "text": "Forest divisions and ranges are defined with boundary areas, including KML upload, and reports are linked to them."
      },
      {
        "title": "Elephant profiles",
        "text": "Individual elephants are catalogued with photos, age, sex and identification notes, and linked to the reports they appear in."
      },
      {
        "title": "Review and verification",
        "text": "Authorised staff review reports, correct location or range, add comments and mark them as active or spam."
      },
      {
        "title": "Maps and graphs",
        "text": "Dashboard maps and charts show where sightings and conflict events occur and how they change over the years."
      },
      {
        "title": "Push notifications",
        "text": "New reports notify researchers, managers and admins of the relevant division through device push notifications."
      },
      {
        "title": "PDF and Excel reports",
        "text": "Weekly PDF reports are generated and emailed by scope, and reports can be exported to Excel."
      },
      {
        "title": "Role-based users",
        "text": "Users register, are approved or rejected, and hold roles from informant to super user, scoped by state or division."
      }
    ],
    "workflow": [
      {
        "title": "Field user submits a report",
        "text": "A field staff member or informant submits photos, location, time and division-specific answers about an elephant sighting or conflict event."
      },
      {
        "title": "Report is stored",
        "text": "The API records the report against its division and range, and stores the photos in cloud storage."
      },
      {
        "title": "Staff are notified",
        "text": "Researchers, managers and admins for that division receive a push notification that a new report awaits review."
      },
      {
        "title": "Reviewer verifies it",
        "text": "An authorised reviewer checks the report, tags individual elephants, corrects location or range if needed, and marks it as active or spam."
      },
      {
        "title": "Data appears on dashboards",
        "text": "Verified reports feed the dashboard maps, graphs and elephant profiles within the reviewer's division or state."
      },
      {
        "title": "Weekly reports are sent",
        "text": "A scheduled job builds PDF reports and emails them to super users, state admins and division staff, scoped to their own area."
      }
    ],
    "highlights": [
      "Division-level configurable forms let each landscape collect different data without changes to the code.",
      "Division and range boundaries are stored as geospatial polygons, with KML import and geospatial indexing on reports.",
      "Access is scoped by role, so state admins and division managers see only their own areas.",
      "The project builds on elephant monitoring in the Gudalur Forest Division by The Shola Trust and the Tamil Nadu Forest Department, per the public website."
    ]
  },
  "kl06": {
    "slug": "kl06",
    "title": "KL06",
    "client": "Multi-seller e-commerce marketplace",
    "categories": [
      "dev",
      "pm"
    ],
    "summary": "Marketplace with a customer website, seller portal, admin panel and API: products and categories, cart and wishlist, orders and invoices, promo codes, reviews, email campaigns and Razorpay payments.",
    "stack": [
      "Vue 2",
      "Vuetify",
      "Node.js",
      "MongoDB",
      "Razorpay"
    ],
    "role": "Developed the application and managed its delivery, from requirements through to release.",
    "overview": "KL06 is a multi-seller e-commerce marketplace. Shoppers browse and buy through a customer website, sellers register and manage their own catalogue and orders, and administrators approve sellers and products, run promotions and monitor sales from a dedicated admin panel.",
    "audience": [
      "Online shoppers and guest visitors",
      "Registered sellers",
      "Marketplace administrators",
      "Support and marketing staff"
    ],
    "modules": [
      {
        "name": "Customer website",
        "text": "Vue storefront for browsing categories and products, seller shop pages, cart, wishlist, checkout, order tracking, reviews and account management."
      },
      {
        "name": "Seller portal",
        "text": "Seller registration, approval status, product and stock management, offers, order handling, cancelled and sold items, notifications and reports."
      },
      {
        "name": "Admin panel",
        "text": "Vue console for seller and product approvals, categories, home banners, promo codes, orders, customers, reports and email campaigns."
      },
      {
        "name": "Node/Express API",
        "text": "MongoDB-backed REST API with role-based access, Razorpay payments, PDF invoices, Excel and PDF reports, email, SMS and push notifications."
      }
    ],
    "features": [
      {
        "title": "Multi-seller catalogue",
        "text": "Sellers list products with variants, pricing, tax, packing and delivery charges, stock limits and photos, organised under main, category and sub-category levels."
      },
      {
        "title": "Approval workflow",
        "text": "Admins review new sellers, new products, product edits and seller promo codes, approving or rejecting with a recorded reason."
      },
      {
        "title": "Cart, buy now and wishlist",
        "text": "Guests and customers can use cart, buy-now and wishlist, and guest items merge into the account at sign-up."
      },
      {
        "title": "Promo codes and offers",
        "text": "Admin-level promo codes support validity windows, caps and first-order rules, while sellers propose product-specific codes for approval."
      },
      {
        "title": "Razorpay checkout and COD",
        "text": "Orders are placed with online payment via Razorpay, with webhook and status checks, or as cash on delivery."
      },
      {
        "title": "Per-seller order fulfilment",
        "text": "Each ordered item carries its own status, which the seller or admin advances from confirmed through shipped to delivered, with customer tracking."
      },
      {
        "title": "Invoices and cancellations",
        "text": "Invoices are numbered per seller and downloadable as PDF, and customers can cancel eligible items, with admin refund updates."
      },
      {
        "title": "Verified reviews",
        "text": "Only customers with a delivered purchase of a product can review it, and ratings roll up to product and seller pages."
      },
      {
        "title": "Reports and campaigns",
        "text": "Admins and sellers get sales and inventory reports with PDF and Excel export, and admins send email campaigns to customer lists."
      }
    ],
    "workflow": [
      {
        "title": "Seller joins and lists",
        "text": "A seller registers and waits for admin approval, then adds products with pricing, stock and photos, which are reviewed before going live."
      },
      {
        "title": "Shopper browses and carts",
        "text": "Visitors browse by category or seller, add items to cart or wishlist as a guest or customer, and sign in or register at checkout."
      },
      {
        "title": "Address and promo code",
        "text": "The customer confirms a delivery address and optionally applies a promo code. Totals include tax, packing and delivery charges worked out per item."
      },
      {
        "title": "Pay online or choose COD",
        "text": "Online orders open a Razorpay payment and wait for the result, while stock is reduced on confirmation and cart items are cleared."
      },
      {
        "title": "Seller fulfils the items",
        "text": "Sellers see their own order items, confirm and ship them, and update status, with notifications sent to the customer."
      },
      {
        "title": "Invoice and delivery",
        "text": "An invoice is generated for each seller's items and delivery is tracked until the item is marked delivered."
      },
      {
        "title": "Review and reporting",
        "text": "Delivered buyers can rate the product, and sellers and administrators review sales and inventory in dashboards and reports."
      }
    ],
    "highlights": [
      "Three separate Vue front ends (storefront, seller area and admin panel) share one API with role-based middleware for client, seller and admin.",
      "Order model keeps item-level status, so one order can contain products from several sellers with independent fulfilment and invoices.",
      "Payment flow integrates Razorpay with webhooks and a status-check endpoint to reconcile successful or failed attempts.",
      "Built-in PDF invoice generation and Excel and PDF report exports for both admins and sellers."
    ]
  }
};
