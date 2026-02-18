# Travel Vaccine Recommendation System

An interactive web application that provides CDC-based vaccine recommendations for 90+ countries, helping travelers prepare for international trips with comprehensive health guidance.

## Features

- 🌍 **90+ Countries with Full Data**: Detailed vaccine recommendations for major travel destinations
- 🔍 **Searchable Interface**: Quick dropdown search across 200+ countries
- 💉 **Comprehensive Vaccine Info**: Required, recommended, and routine immunizations
- ⚠️ **Health Alerts**: Country-specific warnings (malaria risk, water safety, disease outbreaks)
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- 🗺️ **Visual Design**: Beautiful world map background with Earth-themed colors

## Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Responsive design with modern styling and gradients
- **JavaScript (ES6)**: Dynamic search, filtering, and content rendering
- **AI Integration**: Leveraged Claude AI to aggregate and structure CDC data from official health resources

## Project Structure

```
travel-vaccine-app/
├── index.html       # Main HTML structure
├── style.css        # All styling and responsive design
├── script.js        # Vaccine database and interactive functionality
└── README.md        # This file
```

## How to Use

1. **Clone or download** this repository
2. **Open** `index.html` in any modern web browser
3. **Type** your destination country in the search box
4. **View** tailored vaccine recommendations, requirements, and health alerts

No installation or build process required - it's a static web application!

## Data Sources

All vaccine recommendations are based on:
- CDC Travelers' Health website (https://wwwnc.cdc.gov/travel)
- CDC Yellow Book 2024
- WHO International Travel and Health guidelines

## Features by Section

### Required Vaccines
- Vaccines mandated by destination countries for entry
- Age-specific requirements
- Yellow Fever certification details

### Recommended Vaccines
- CDC-recommended immunizations based on destination
- Risk-based recommendations (malaria zones, disease outbreaks)
- Travel duration and activity considerations

### Routine Vaccines
- Standard immunizations all travelers should have
- Includes MMR, Tdap, Influenza, COVID-19, etc.

### Health & Safety Notes
- Malaria risk zones
- Water and food safety guidelines
- Disease outbreak alerts
- Healthcare system quality
- Altitude and climate considerations

## Countries Covered

The application includes detailed vaccine data for 90+ countries across all continents:

- **Asia**: Thailand, Japan, China, India, Indonesia, Philippines, Malaysia, Singapore, Vietnam, South Korea, Cambodia, Nepal, Sri Lanka, Bangladesh, Pakistan, Myanmar, Laos
- **Africa**: Kenya, Egypt, South Africa, Morocco, Tanzania, Nigeria, Ghana, Ethiopia, Uganda, Senegal, Rwanda
- **Europe**: France, Italy, Spain, Germany, UK, Greece, Portugal, Netherlands, Switzerland, Poland, Russia, Sweden, Norway
- **Americas**: Mexico, Brazil, Colombia, Peru, Argentina, Chile, Ecuador, Bolivia, Venezuela, Canada, Costa Rica, Panama, Guatemala, Honduras, Nicaragua, El Salvador, USA
- **Caribbean**: Dominican Republic, Jamaica, Cuba, Haiti, Bahamas, Barbados
- **Middle East**: UAE, Turkey, Israel, Saudi Arabia, Jordan, Lebanon
- **Oceania**: Australia, New Zealand, Fiji, Papua New Guinea, Solomon Islands

For countries without detailed data, the app provides general guidance and links to official CDC resources.

## Development Notes

### AI-Assisted Development
This project utilized AI (Claude) to:
- Research and compile CDC vaccine data from official sources
- Structure 90+ countries worth of health information
- Ensure accuracy and consistency across all entries
- Generate the comprehensive vaccine database

### Performance
- Lightweight: Total size ~150KB (HTML + CSS + JS combined)
- Fast load time: No external dependencies
- Instant search: Client-side filtering with no server requests
- Works offline: Once loaded, fully functional without internet

## Future Enhancements

Potential features for future versions:
- [ ] Export recommendations to PDF
- [ ] Save travel itineraries
- [ ] Multi-country trip planning
- [ ] Vaccine clinic locator integration
- [ ] Push notifications for outbreak alerts
- [ ] Integration with Apple Health / Google Fit for vaccine records

## License

This project is for educational purposes. All vaccine data is sourced from public CDC resources. Please consult with healthcare professionals for medical advice.

## Disclaimer

This tool provides general information based on CDC guidelines. It is not a substitute for professional medical advice. Always consult with a healthcare provider or travel medicine specialist at least 4-6 weeks before international travel.

## Contact

For questions or suggestions about this project, please open an issue on GitHub.

---

**Last Updated**: February 2026  
**Data Source**: CDC Travelers' Health (https://wwwnc.cdc.gov/travel)
