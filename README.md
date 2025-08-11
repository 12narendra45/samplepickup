# Sample Collection Agent App

## 📌 Overview

This is a **React Native mobile app** made for medical agents who **collect diagnostic samples** from hospitals, clinics, and patient homes. The goal is to make their work easier, faster, and error-free – even when there is low internet connectivity.

---

## 👷‍♂️ How an Agent Uses the App

1. **Opens the App**
2. Sees a list of all pickups for today
3. Taps a patient to view details
4. Marks the sample as "Collected", "In Transit", or "Delivered"
5. Can report an issue if something goes wrong (e.g. patient not available)
6. Can view pickup locations on the map to plan the route

---

## 🧭 App Workflow

### 1. Home Screen
- Lists all pickups for the day
- Each pickup card has name, location, and collection status
- Tap a card to go to details

### 2. Pickup Details Screen
- Shows full details: name, address, time, contact
- Sample status update (e.g. Collected → In Transit)
- Report an issue if needed
- Button to open Route Map

### 3. Route Map Screen
- Map showing locations of all pickups
- Helps agent plan their travel route

### 4. Report Issue Screen
- Simple text input to describe the issue
- (Can be expanded later with photo upload, categories, etc.)

---

## 🧠 Why This App is Useful

- ✅ Easy to use even by non-tech-savvy agents
- ✅ Works in low internet areas (can be made offline-first)
- ✅ Reduces manual errors and paperwork
- ✅ Keeps hospitals updated in real time
- ✅ Saves time with route planning

---

# 🧠 Thought Process Behind the Sample Collection Agent App

## **User Profile**
- Target users are **medical agents** who may not be highly technical.  
- Often work in areas with **patchy or no internet connectivity**.  
- The app must be **intuitive**, **minimal**, and **fast** to use.  

---

## **Primary Goals**
- ✅ Ensure **fast task completion**.  
- ✅ Minimize **clicks/taps** required to update statuses.  
- ✅ Allow **offline operation** with automatic sync when online.  

---

## **Core Features Selection**
- **Home Screen** → Quick overview of all pickups for the day, avoiding multiple navigation steps.  
- **Status Updates** → Mark samples as *Collected*, *In Transit*, or *Delivered*, replacing paper logs.  
- **Route Map** → Optimize travel to save **time & fuel**.  
- **Report Issue** → Fast escalation when problems occur (e.g., patient unavailable).  

---

## **Connectivity Considerations**
- Store data **locally** using:
  - **SQLite**
  - **AsyncStorage** (for smaller temporary data)  
- Implement **background sync** to update the server when internet becomes available.  

---

## **Scalability & Future-Proofing**
- 🔄 Future integration with **Hospital/LIS (Lab Information Systems)**.  
- 📷 Add **barcode scanning** for sample verification.  
- 📎 Enable **photo & document uploads** for proof of collection or issue reporting.  

---

## **Design Philosophy**
- **Large, clear buttons** for quick access during fieldwork.  
- **Minimal clutter** → Only essential information per screen.  
- **Accessible UI** → Usable in bright outdoor conditions.  

---


## 🖼️ Screenshots

<p align="center">
  <img src="./screenshots/home.png" alt="Home" width="45%" />
  <img src="./screenshots/details.png" alt="Pickup Details" width="45%" />
</p>

<p align="center">
  <img src="./screenshots/map.png" alt="Route Map" width="45%" />
  <img src="./screenshots/report.png" alt="Report Issue" width="45%" />
</p>




