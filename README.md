# RXJS Lab

A modern Angular single-page application designed to showcase RxJS operators and reactive programming patterns with REST API integration. This project serves as a foundation for demonstrating how to use RxJS for handling GET requests to fetch Users, Posts, and Comments data.

![RXJS Lab Screenshot](https://github.com/user-attachments/assets/0c514612-707e-4f72-8a1b-47003f9ff243)

## Features

- **Modern Angular**: Built with Angular 20+ using standalone components
- **Tailwind CSS**: Beautiful, responsive design with utility-first CSS framework
- **RxJS Ready**: Pre-configured with RxJS services for REST API integration
- **Three Main Sections**: Users, Posts, and Comments display areas
- **Mock Data Service**: Ready-to-replace service structure for actual API calls
- **No Routing**: Simple single-page application as requested

## Project Structure

```
src/
├── app/
│   ├── services/
│   │   └── data.service.ts      # RxJS service for API calls
│   ├── app.html                 # Main template with Tailwind styling
│   ├── app.ts                   # Root component
│   ├── app.css                  # Component styles
│   └── app.config.ts            # App configuration
├── styles.css                   # Global styles with Tailwind imports
└── index.html                   # Main HTML file
```

## Technologies Used

- **Angular** 20.3.0 - Frontend framework
- **RxJS** 7.8.0 - Reactive programming library
- **Tailwind CSS** 3.4.0 - Utility-first CSS framework
- **TypeScript** 5.9.2 - Type-safe JavaScript
- **PostCSS** & **Autoprefixer** - CSS processing

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (included with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DereKk8/RXJS_Lab.git
cd RXJS_Lab
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build in watch mode
- `npm test` - Run unit tests

## RxJS Integration

The application includes a `DataService` that demonstrates RxJS patterns:

- **Observable Streams**: All data methods return Observables
- **Operators**: Uses `delay` operator to simulate network latency
- **Mock Data**: Provides sample Users, Posts, and Comments
- **API Ready**: Service methods are structured to easily replace with HTTP calls

### Example Usage

```typescript
// In a component
constructor(private dataService: DataService) {}

loadUsers() {
  this.dataService.getUsers().subscribe(users => {
    console.log('Users loaded:', users);
  });
}
```

## Future Development

This project is prepared for:

1. **REST API Integration**: Replace mock data with actual HTTP calls
2. **Advanced RxJS Operators**: Implement `map`, `filter`, `switchMap`, `combineLatest`, etc.
3. **Error Handling**: Add `catchError` and retry logic
4. **Loading States**: Implement loading indicators
5. **Real-time Updates**: WebSocket integration with RxJS subjects

## UI Sections

### Users Section
- Displays user profiles with names and emails
- Blue theme with left border accent
- "Load More Users" button for pagination demo

### Posts Section  
- Shows blog posts with titles and content previews
- Green theme with left border accent
- "Load More Posts" button for pagination demo

### Comments Section
- Displays user comments and feedback
- Purple theme with left border accent
- "Load More Comments" button for pagination demo

### Status Section
- Shows current RxJS integration status
- Indicates readiness for REST API connection

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Next Steps

- [ ] Connect to a real REST API (JSONPlaceholder, custom backend, etc.)
- [ ] Implement actual RxJS operators for data transformation
- [ ] Add error handling and loading states
- [ ] Create individual components for Users, Posts, and Comments
- [ ] Add routing if needed for future expansion
- [ ] Implement CRUD operations with RxJS
