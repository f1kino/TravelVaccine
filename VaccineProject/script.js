// Comprehensive travel vaccine database based on CDC data (50+ countries)
const vaccineDatabase = {
    // ASIA
    thailand: {
        name: "Thailand",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if traveling from a country with risk of Yellow Fever transmission. Certificate must be presented upon entry."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for most travelers. You can get hepatitis A through contaminated food or water in Thailand."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers. Can be transmitted through sexual contact, contaminated needles, and blood products."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers, especially if staying with friends/relatives, visiting smaller cities or rural areas, or if you're an adventurous eater."
            },
            {
                name: "Japanese Encephalitis",
                description: "Consider if visiting rural areas, spending >1 month, or doing outdoor activities. Endemic in northern provinces during May-October."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers, those working with animals, long-term travelers, or children (more likely to be bitten). Vaccine readily available in Thailand."
            },
            {
                name: "Cholera",
                description: "Consider if visiting areas with active transmission. Rare sporadic cases reported, no active outbreaks."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk exists in provinces bordering Myanmar, Cambodia (except Buri Ram), and Malaysia",
            "Dengue is present year-round - prevent mosquito bites",
            "Drink only bottled or filtered water",
            "Be cautious with street food - eat only thoroughly cooked, hot food",
            "Monkeys carry rabies and B virus - don't touch or feed them"
        ]
    },
    japan: {
        name: "Japan",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for most travelers going to Japan."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Japanese Encephalitis",
                description: "Consider if spending >1 month in rural areas or visiting during transmission season (May-October)."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Japan has excellent healthcare facilities",
            "Low risk for most infectious diseases",
            "Tap water is safe to drink",
            "Food safety standards are very high"
        ]
    },
    india: {
        name: "India",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers. Can get through contaminated food or water."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Highly recommended for most travelers, especially those staying with friends/relatives or visiting smaller cities."
            },
            {
                name: "Japanese Encephalitis",
                description: "Consider if spending >1 month in rural areas or extensive outdoor activities."
            },
            {
                name: "Rabies",
                description: "Consider for travelers involved in outdoor activities, working with animals, or long trips to remote areas."
            },
            {
                name: "Cholera",
                description: "Consider if visiting areas with active transmission or during outbreaks."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk exists in many rural areas",
            "Dengue is widespread during monsoon season",
            "Drink only bottled or boiled water",
            "Avoid raw foods and unpasteurized dairy",
            "Air pollution can be severe in major cities"
        ]
    },
    brazil: {
        name: "Brazil",
        required: [],
        recommended: [
            {
                name: "Yellow Fever",
                description: "Recommended for all travelers ≥9 months going to certain areas. Endemic in many regions including Amazon Basin."
            },
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers, especially those staying with friends/relatives or visiting smaller cities."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers, those working with animals, or visiting remote areas."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in Amazon Basin region",
            "Zika virus present - pregnant women should consult doctor",
            "Dengue and chikungunya are widespread",
            "Yellow fever vaccine centers are authorized locations only",
            "Consider altitude sickness medication if visiting highlands"
        ]
    },
    kenya: {
        name: "Kenya",
        required: [
            {
                name: "Yellow Fever",
                description: "Required for travelers ≥1 year arriving from countries with risk of Yellow Fever transmission."
            }
        ],
        recommended: [
            {
                name: "Yellow Fever",
                description: "Recommended for all travelers ≥9 months old. Risk exists in most of the country."
            },
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers, those working with animals, or children."
            },
            {
                name: "Meningococcal",
                description: "Consider during dry season (December-June) or if in close contact with local population."
            },
            {
                name: "Cholera",
                description: "Consider if visiting areas with active transmission."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk throughout most of country below 2,500m elevation",
            "Dengue occasionally reported",
            "Drink only bottled or boiled water",
            "Altitude sickness possible in highlands",
            "Consult doctor about malaria prophylaxis"
        ]
    },
    mexico: {
        name: "Mexico",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers, especially those staying with friends/relatives or visiting smaller cities."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers, those working with animals, or visiting remote areas."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in some southern states",
            "Dengue present year-round in many areas",
            "Zika virus present",
            "Tap water generally not safe to drink",
            "Food safety varies - choose restaurants carefully"
        ]
    },
    australia: {
        name: "Australia",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers going to remote areas or with certain risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low risk for vaccine-preventable diseases",
            "Excellent healthcare system",
            "Japanese Encephalitis risk in far north (Torres Strait)",
            "Sun protection essential - high UV levels",
            "Tap water is safe to drink"
        ]
    },
    france: {
        name: "France",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers going to rural areas."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low risk for vaccine-preventable diseases",
            "Excellent healthcare facilities",
            "Tap water is safe to drink",
            "Tick-borne encephalitis risk in certain regions"
        ]
    },
    egypt: {
        name: "Egypt",
        required: [
            {
                name: "Polio",
                description: "Proof of polio vaccination required for long-term travelers and residents."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those working with animals."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Drink only bottled or boiled water",
            "Be cautious with food preparation",
            "Schistosomiasis risk in Nile River - avoid swimming",
            "Heat-related illness common - stay hydrated"
        ]
    },
    vietnam: {
        name: "Vietnam",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Japanese Encephalitis",
                description: "Consider if spending >1 month in rural areas or extensive outdoor activities."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers, those working with animals, or visiting remote areas."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in some rural areas",
            "Dengue widespread during rainy season",
            "Drink only bottled or boiled water",
            "Be cautious with street food",
            "Tuberculosis burden is high"
        ]
    },
    china: {
        name: "China",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Japanese Encephalitis",
                description: "Consider if visiting rural areas or staying >1 month, especially during summer months."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those working with animals."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Air pollution can be severe in major cities",
            "Tap water is not safe to drink",
            "High tuberculosis burden",
            "Food safety standards vary by region",
            "Altitude sickness possible in Tibet and western regions"
        ]
    },
    indonesia: {
        name: "Indonesia",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Japanese Encephalitis",
                description: "Consider if visiting rural areas or staying >1 month."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers, especially in Bali where dog bites are common."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in eastern Indonesia",
            "Dengue present year-round throughout country",
            "Drink only bottled or boiled water",
            "Rabies common in dogs, especially Bali",
            "Chikungunya and Zika present"
        ]
    },
    philippines: {
        name: "Philippines",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥1 year of age."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Japanese Encephalitis",
                description: "Consider if visiting rural areas or staying >1 month."
            },
            {
                name: "Rabies",
                description: "Consider for travelers to rural areas or those working with animals."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in some rural areas",
            "Dengue is widespread year-round",
            "Tap water not safe to drink",
            "Typhoons possible June-November",
            "Tuberculosis burden is high"
        ]
    },
    malaysia: {
        name: "Malaysia",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥1 year of age."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for most travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Japanese Encephalitis",
                description: "Consider if visiting rural areas, especially Sarawak."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those working with animals."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in interior Borneo (Sabah & Sarawak)",
            "Dengue present year-round",
            "Tap water generally safe in cities",
            "Good healthcare facilities in urban areas",
            "Haze from forest fires can affect air quality"
        ]
    },
    singapore: {
        name: "Singapore",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥1 year of age."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers with specific risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low risk for most diseases",
            "Excellent healthcare system",
            "Tap water is safe to drink",
            "High food safety standards",
            "Dengue occasionally reported"
        ]
    },
    cambodia: {
        name: "Cambodia",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Japanese Encephalitis",
                description: "Consider if visiting rural areas or staying >1 month."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those working with animals."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in some areas",
            "Dengue present year-round",
            "Drink only bottled or boiled water",
            "Landmines still present in some rural areas",
            "Healthcare facilities limited outside Phnom Penh"
        ]
    },
    // SOUTH AMERICA
    peru: {
        name: "Peru",
        required: [],
        recommended: [
            {
                name: "Yellow Fever",
                description: "Recommended for travelers ≥9 months going to areas <2,300m elevation in Amazon regions (Amazonas, Loreto, Madre de Dios, San Martin, Ucayali)."
            },
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those visiting remote areas."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in Amazon Basin regions",
            "Dengue in coastal and jungle areas",
            "No dengue risk in Cusco, Machu Picchu (high altitude)",
            "Altitude sickness possible in highlands",
            "Drink only bottled or boiled water"
        ]
    },
    colombia: {
        name: "Colombia",
        required: [],
        recommended: [
            {
                name: "Yellow Fever",
                description: "Recommended for travelers ≥9 months going to most departments except Bogotá, Cali, Medellín, and Cartagena."
            },
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those visiting remote areas."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in rural areas below 1,600m",
            "Dengue and Zika widespread",
            "Chikungunya present",
            "Tap water not safe to drink",
            "Good healthcare in major cities"
        ]
    },
    argentina: {
        name: "Argentina",
        required: [],
        recommended: [
            {
                name: "Yellow Fever",
                description: "Recommended for travelers ≥9 months going to Misiones and Corrientes provinces."
            },
            {
                name: "Hepatitis A",
                description: "Recommended for most travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Consider for travelers visiting smaller cities or rural areas."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those visiting remote areas."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low malaria risk (limited to border areas)",
            "Dengue in northern provinces",
            "Good healthcare system",
            "Tap water generally safe in cities",
            "Altitude sickness possible in Andes regions"
        ]
    },
    chile: {
        name: "Chile",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers with specific risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Consider for travelers visiting rural areas."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "No Yellow Fever or malaria risk",
            "Very low disease risk overall",
            "Good healthcare system",
            "Tap water generally safe to drink",
            "Altitude sickness possible in northern regions"
        ]
    },
    ecuador: {
        name: "Ecuador",
        required: [],
        recommended: [
            {
                name: "Yellow Fever",
                description: "Recommended for travelers ≥9 months going to provinces east of the Andes <2,300m elevation, including Amazon regions."
            },
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those visiting remote areas."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in rural areas <1,500m",
            "Dengue and Zika present",
            "No Yellow Fever in Galápagos Islands",
            "Altitude sickness in Quito and highlands",
            "Drink only bottled or boiled water"
        ]
    },
    // AFRICA
    "south africa": {
        name: "South Africa",
        required: [
            {
                name: "Yellow Fever",
                description: "Required only if arriving from countries with risk of Yellow Fever transmission."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for most travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for travelers visiting rural areas or smaller cities."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers. Rabies outbreak in Cape fur seals - avoid contact."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in Kruger Park and northeast regions",
            "Good healthcare in major cities",
            "Tap water generally safe in cities",
            "High tuberculosis and HIV prevalence",
            "Crime can be a concern - take precautions"
        ]
    },
    morocco: {
        name: "Morocco",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Consider for travelers visiting rural areas."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers. Rabies present in dogs and other mammals."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "No malaria risk",
            "Drink bottled water in rural areas",
            "Food safety varies - choose restaurants carefully",
            "Good healthcare in major cities",
            "Altitude sickness possible in Atlas Mountains"
        ]
    },
    tanzania: {
        name: "Tanzania",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥1 year of age."
            }
        ],
        recommended: [
            {
                name: "Yellow Fever",
                description: "Generally not recommended, but consider for travelers at increased risk due to prolonged exposure in rural areas."
            },
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Cholera",
                description: "Consider for travelers visiting areas with active transmission."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers, especially those visiting Serengeti."
            },
            {
                name: "Meningococcal",
                description: "Consider during dry season or if in close contact with local population."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk throughout most of country",
            "Yellow Fever not endemic but vaccination may be considered",
            "Drink only bottled or boiled water",
            "Altitude sickness possible on Mt. Kilimanjaro",
            "Healthcare facilities limited outside major cities"
        ]
    },
    nigeria: {
        name: "Nigeria",
        required: [
            {
                name: "Yellow Fever",
                description: "Required for all travelers ≥9 months of age."
            }
        ],
        recommended: [
            {
                name: "Yellow Fever",
                description: "Recommended for all travelers ≥9 months. Yellow Fever endemic throughout country."
            },
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Meningococcal",
                description: "Recommended, especially during dry season (December-June). Nigeria is in meningitis belt."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those working with animals."
            },
            {
                name: "Cholera",
                description: "Consider for travelers visiting areas with active transmission."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk throughout entire country",
            "Diphtheria outbreaks reported",
            "Drink only bottled or boiled water",
            "Healthcare facilities very limited",
            "Security concerns in some regions"
        ]
    },
    // EUROPE
    italy: {
        name: "Italy",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers going to rural areas."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low risk for vaccine-preventable diseases",
            "Excellent healthcare system",
            "Tap water is safe to drink",
            "Tick-borne encephalitis risk in northern regions",
            "Measles outbreaks occasionally reported"
        ]
    },
    spain: {
        name: "Spain",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers going to rural areas."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low risk for vaccine-preventable diseases",
            "Excellent healthcare system",
            "Tap water is safe to drink",
            "Polio case recently detected - ensure vaccination up to date",
            "Good food safety standards"
        ]
    },
    germany: {
        name: "Germany",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers with specific risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low risk for vaccine-preventable diseases",
            "Excellent healthcare system",
            "Tap water is safe to drink",
            "Tick-borne encephalitis risk in Bavaria and Baden-Württemberg",
            "Measles outbreaks occasionally occur"
        ]
    },
    "united kingdom": {
        name: "United Kingdom",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers with specific risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low risk for vaccine-preventable diseases",
            "Excellent healthcare system (NHS)",
            "Tap water is safe to drink",
            "Measles outbreaks occasionally reported",
            "Polio detected in wastewater - ensure vaccination current"
        ]
    },
    greece: {
        name: "Greece",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers going to rural areas or islands."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low risk for vaccine-preventable diseases",
            "Good healthcare system",
            "Tap water generally safe to drink",
            "West Nile Virus occasionally reported in summer",
            "Good food safety standards"
        ]
    },
    portugal: {
        name: "Portugal",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers with specific risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low risk for vaccine-preventable diseases",
            "Good healthcare system",
            "Tap water is safe to drink",
            "Excellent food safety",
            "Sun protection important - high UV levels"
        ]
    },
    // MIDDLE EAST
    "united arab emirates": {
        name: "United Arab Emirates",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥9 months of age."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers with specific risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low risk for most diseases",
            "Excellent healthcare facilities",
            "Tap water is safe to drink",
            "Very high temperatures in summer months",
            "MERS (Middle East Respiratory Syndrome) occasionally reported"
        ]
    },
    turkey: {
        name: "Turkey",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for most travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Consider for travelers visiting rural areas."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those working with animals."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk very low (limited border areas)",
            "Tap water quality varies - bottled water recommended",
            "Good healthcare in major cities",
            "Measles outbreaks occasionally occur",
            "Be cautious with food from street vendors"
        ]
    },
    israel: {
        name: "Israel",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers with specific risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low risk for most diseases",
            "Excellent healthcare system",
            "Tap water is safe to drink",
            "Polio detected in wastewater - ensure vaccination current",
            "Security situation varies - check travel advisories"
        ]
    },
    // NORTH AMERICA & CARIBBEAN
    canada: {
        name: "Canada",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers with specific risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low risk for vaccine-preventable diseases",
            "Excellent healthcare system",
            "Tap water is safe to drink",
            "Lyme disease risk in some regions",
            "Cold weather precautions necessary in winter"
        ]
    },
    "costa rica": {
        name: "Costa Rica",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for travelers visiting rural areas."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those visiting remote areas."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "No malaria in most tourist areas",
            "Dengue, Zika, and chikungunya present",
            "Good healthcare system",
            "Tap water generally safe in major cities",
            "Adventure activities require safety precautions"
        ]
    },
    jamaica: {
        name: "Jamaica",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥1 year of age."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Consider for travelers visiting rural areas."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "No malaria risk",
            "Dengue and Zika present",
            "Tap water quality varies - bottled water recommended",
            "Healthcare facilities adequate in tourist areas",
            "Crime can be a concern - stay in resort areas"
        ]
    },
    // OCEANIA
    "new zealand": {
        name: "New Zealand",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers with specific risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low risk for vaccine-preventable diseases",
            "Excellent healthcare system",
            "Tap water is safe to drink",
            "Sun protection essential - high UV levels",
            "No venomous animals"
        ]
    },
    fiji: {
        name: "Fiji",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥1 year of age."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Consider for travelers visiting rural areas or outer islands."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "No malaria risk",
            "Dengue and Zika present",
            "Tap water quality varies - bottled water recommended outside resorts",
            "Healthcare facilities limited outside main islands",
            "Strong sun - use protection"
        ]
    },
    // CENTRAL AMERICA
    panama: {
        name: "Panama",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥1 year of age."
            }
        ],
        recommended: [
            {
                name: "Yellow Fever",
                description: "Recommended for travelers ≥9 months going to areas east of Panama Canal (Darién, Emberá, and Kuna Yala provinces)."
            },
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for travelers visiting rural areas."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those visiting remote areas."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in some rural areas",
            "Dengue, Zika, and chikungunya present",
            "No Yellow Fever risk in Panama City or Canal Zone",
            "Good healthcare in Panama City",
            "Drink bottled water outside major cities"
        ]
    },
    guatemala: {
        name: "Guatemala",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥1 year of age."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those visiting remote areas."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in some rural areas below 1,500m",
            "Dengue, Zika, and chikungunya present",
            "Drink only bottled or boiled water",
            "Healthcare facilities limited outside major cities",
            "Altitude sickness possible in highlands"
        ]
    },
    // ADDITIONAL COUNTRIES
    nepal: {
        name: "Nepal",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥1 year of age."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Japanese Encephalitis",
                description: "Consider if visiting rural areas or staying >1 month, especially in Terai region."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or trekkers."
            },
            {
                name: "Cholera",
                description: "Consider for travelers visiting areas with active transmission."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in Terai lowlands",
            "Altitude sickness serious concern - acclimatize properly",
            "Drink only bottled or boiled water",
            "Healthcare facilities very limited outside Kathmandu",
            "Trekking requires proper preparation and guides"
        ]
    },
    "sri lanka": {
        name: "Sri Lanka",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥9 months of age."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Japanese Encephalitis",
                description: "Consider if visiting rural areas or staying >1 month."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers. Dog bites common."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low malaria risk",
            "Dengue present year-round",
            "Drink bottled water outside major cities",
            "Good healthcare in Colombo",
            "Leptospirosis risk in flooded areas"
        ]
    },
    bolivia: {
        name: "Bolivia",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from certain countries with risk of Yellow Fever transmission."
            }
        ],
        recommended: [
            {
                name: "Yellow Fever",
                description: "Recommended for travelers ≥9 months going to areas <2,300m elevation in all departments."
            },
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those visiting remote areas."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in Amazon regions",
            "No Yellow Fever in La Paz (high altitude)",
            "Altitude sickness major concern - La Paz at 3,600m",
            "Drink only bottled or boiled water",
            "Healthcare facilities limited"
        ]
    },
    venezuela: {
        name: "Venezuela",
        required: [],
        recommended: [
            {
                name: "Yellow Fever",
                description: "Recommended for travelers ≥9 months going to areas south of and including the following areas: Bolívar, Delta Amacuro, and Amazonas states."
            },
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those visiting remote areas."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in some areas",
            "Dengue and Zika present",
            "Healthcare system severely compromised",
            "Security situation critical - check travel advisories",
            "Shortages of medical supplies"
        ]
    },
    myanmar: {
        name: "Myanmar (Burma)",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥1 year of age."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Japanese Encephalitis",
                description: "Consider if visiting rural areas or staying >1 month."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those visiting remote areas."
            },
            {
                name: "Cholera",
                description: "Consider for travelers visiting areas with active transmission."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in border areas",
            "Dengue present year-round",
            "Drink only bottled or boiled water",
            "Healthcare facilities very limited",
            "Political situation unstable - check travel advisories"
        ]
    },
    // MORE CARIBBEAN
    "dominican republic": {
        name: "Dominican Republic",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥1 year of age."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended especially if visiting friends/relatives or rural areas."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those visiting rural areas."
            },
            {
                name: "Cholera",
                description: "Consider for travelers to areas with active transmission (border regions with Haiti)."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk near Haiti border and some provinces",
            "Dengue, Zika, and chikungunya present",
            "Leptospirosis risk - avoid freshwater swimming",
            "Good healthcare in tourist areas",
            "Tap water not safe to drink"
        ]
    },
    cuba: {
        name: "Cuba",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Consider for travelers visiting rural areas."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "No malaria risk",
            "Dengue and Zika present",
            "Chikungunya outbreak recently reported",
            "Healthcare system limited due to shortages",
            "Tap water not safe to drink"
        ]
    },
    haiti: {
        name: "Haiti",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for all travelers."
            },
            {
                name: "Cholera",
                description: "Recommended. Active cholera transmission occurring."
            },
            {
                name: "Rabies",
                description: "Consider for all travelers due to high rabies risk."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk throughout country",
            "Dengue, Zika, and chikungunya widespread",
            "Cholera epidemic - drink only bottled water",
            "Healthcare system severely limited",
            "Security situation critical - check travel advisories"
        ]
    },
    bahamas: {
        name: "Bahamas",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥1 year of age."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers with specific risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low disease risk",
            "No malaria",
            "Dengue occasionally reported",
            "Good healthcare in Nassau",
            "Tap water generally safe in resorts"
        ]
    },
    barbados: {
        name: "Barbados",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥1 year of age."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers with specific risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low disease risk",
            "No malaria",
            "Dengue and Zika occasionally reported",
            "Excellent healthcare",
            "Tap water safe to drink"
        ]
    },
    // MORE SOUTH AMERICA
    uruguay: {
        name: "Uruguay",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers with specific risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low disease risk",
            "No Yellow Fever or malaria",
            "Good healthcare system",
            "Tap water safe to drink",
            "Similar health profile to developed countries"
        ]
    },
    paraguay: {
        name: "Paraguay",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥9 months of age."
            }
        ],
        recommended: [
            {
                name: "Yellow Fever",
                description: "Recommended for travelers ≥9 months going to all departments."
            },
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those visiting rural areas."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low malaria risk",
            "Dengue and Zika present",
            "Yellow Fever risk throughout country",
            "Healthcare limited outside Asunción",
            "Drink bottled water"
        ]
    },
    // MORE AFRICA
    ghana: {
        name: "Ghana",
        required: [
            {
                name: "Yellow Fever",
                description: "Required for all travelers ≥9 months of age."
            }
        ],
        recommended: [
            {
                name: "Yellow Fever",
                description: "Recommended for all travelers ≥9 months. Yellow Fever endemic."
            },
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Meningococcal",
                description: "Recommended, especially during dry season. Ghana is in meningitis belt."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those working with animals."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk throughout entire country",
            "Drink only bottled or boiled water",
            "Healthcare facilities limited",
            "Yellow Fever vaccination required for entry",
            "Meningitis risk during dry season (November-June)"
        ]
    },
    ethiopia: {
        name: "Ethiopia",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥9 months of age."
            }
        ],
        recommended: [
            {
                name: "Yellow Fever",
                description: "Recommended for travelers ≥9 months going to all areas <2,300m elevation."
            },
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Meningococcal",
                description: "Recommended, especially during dry season. Ethiopia is in meningitis belt."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers."
            },
            {
                name: "Cholera",
                description: "Consider for travelers visiting areas with active transmission."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk below 2,000m elevation",
            "No Yellow Fever in Addis Ababa (high altitude)",
            "Altitude sickness possible in highlands",
            "Healthcare facilities very limited",
            "Drink only bottled or boiled water"
        ]
    },
    uganda: {
        name: "Uganda",
        required: [
            {
                name: "Yellow Fever",
                description: "Required for travelers ≥1 year of age."
            }
        ],
        recommended: [
            {
                name: "Yellow Fever",
                description: "Recommended for all travelers ≥9 months."
            },
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Meningococcal",
                description: "Consider during dry season or if in close contact with local population."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers, especially gorilla trekkers."
            },
            {
                name: "Cholera",
                description: "Consider for travelers visiting areas with active transmission."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk throughout country",
            "Ebola outbreaks have occurred - check current status",
            "Drink only bottled or boiled water",
            "Healthcare facilities limited outside Kampala",
            "Yellow Fever vaccination required for entry"
        ]
    },
    senegal: {
        name: "Senegal",
        required: [
            {
                name: "Yellow Fever",
                description: "Required for travelers ≥9 months of age."
            }
        ],
        recommended: [
            {
                name: "Yellow Fever",
                description: "Recommended for all travelers ≥9 months."
            },
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Meningococcal",
                description: "Recommended, especially during dry season (December-June)."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk throughout country",
            "Yellow Fever vaccination required for entry",
            "Drink only bottled or boiled water",
            "Healthcare facilities adequate in Dakar",
            "Meningitis risk during dry season"
        ]
    },
    rwanda: {
        name: "Rwanda",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥1 year of age."
            }
        ],
        recommended: [
            {
                name: "Yellow Fever",
                description: "Generally not recommended, but consider for travelers at increased risk in rural areas."
            },
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Meningococcal",
                description: "Consider during dry season."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers, especially gorilla trekkers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in most areas",
            "Marburg virus outbreak occurred in 2024",
            "Good healthcare in Kigali",
            "Drink only bottled or boiled water",
            "High elevation in some areas"
        ]
    },
    // MORE ASIA
    pakistan: {
        name: "Pakistan",
        required: [
            {
                name: "Polio",
                description: "Proof of polio vaccination required for long-term travelers and residents departing Pakistan."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for all travelers."
            },
            {
                name: "Rabies",
                description: "Consider for all travelers due to high rabies risk."
            },
            {
                name: "Japanese Encephalitis",
                description: "Consider if visiting rural areas."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in some areas",
            "Polio still circulating - ensure vaccination current",
            "Dengue in urban areas",
            "Drink only bottled or boiled water",
            "Healthcare facilities limited outside major cities"
        ]
    },
    bangladesh: {
        name: "Bangladesh",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥1 year of age."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for all travelers."
            },
            {
                name: "Japanese Encephalitis",
                description: "Consider if visiting rural areas or staying >1 month."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers."
            },
            {
                name: "Cholera",
                description: "Consider for travelers visiting areas with active transmission."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in some areas",
            "Dengue widespread, especially during monsoon",
            "Drink only bottled or boiled water",
            "Healthcare facilities limited",
            "Flooding common during monsoon season"
        ]
    },
    "south korea": {
        name: "South Korea",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers with specific risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Japanese Encephalitis",
                description: "Consider if visiting rural areas during transmission season (May-October)."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low risk for most diseases",
            "Excellent healthcare system",
            "Tap water safe to drink",
            "Good food safety standards",
            "MERS occasionally reported"
        ]
    },
    laos: {
        name: "Laos",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Japanese Encephalitis",
                description: "Consider if visiting rural areas or staying >1 month."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in some areas",
            "Dengue present year-round",
            "Drink only bottled or boiled water",
            "Healthcare facilities very limited",
            "Unexploded ordnance in some areas"
        ]
    },
    // MORE EUROPE
    poland: {
        name: "Poland",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers with specific risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low risk for vaccine-preventable diseases",
            "Good healthcare system",
            "Tap water safe to drink",
            "Tick-borne encephalitis risk in some regions",
            "Polio detected - ensure vaccination current"
        ]
    },
    russia: {
        name: "Russia",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for most travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers or those visiting remote areas."
            },
            {
                name: "Japanese Encephalitis",
                description: "Consider if visiting rural areas in Far East Russia."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "No malaria risk",
            "Tick-borne encephalitis risk in many areas",
            "Tap water quality varies - bottled water recommended",
            "Healthcare adequate in major cities",
            "Very cold winters require preparation"
        ]
    },
    netherlands: {
        name: "Netherlands",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers with specific risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low risk for vaccine-preventable diseases",
            "Excellent healthcare system",
            "Tap water safe to drink",
            "High food safety standards",
            "Measles outbreaks occasionally occur"
        ]
    },
    switzerland: {
        name: "Switzerland",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers with specific risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low risk for vaccine-preventable diseases",
            "Excellent healthcare system",
            "Tap water safe to drink",
            "Tick-borne encephalitis risk in some areas",
            "Altitude sickness possible in Alps"
        ]
    },
    sweden: {
        name: "Sweden",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers with specific risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low risk for vaccine-preventable diseases",
            "Excellent healthcare system",
            "Tap water safe to drink",
            "Tick-borne encephalitis risk in some coastal areas",
            "Cold weather precautions in winter"
        ]
    },
    norway: {
        name: "Norway",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers with specific risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low risk for vaccine-preventable diseases",
            "Excellent healthcare system",
            "Tap water safe to drink",
            "Very cold winters require preparation",
            "Polar night in northern regions winter"
        ]
    },
    // MORE MIDDLE EAST
    "saudi arabia": {
        name: "Saudi Arabia",
        required: [
            {
                name: "Meningococcal",
                description: "Required for pilgrims traveling to Mecca for Hajj or Umrah. Quadrivalent (ACWY) vaccine required."
            },
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥9 months of age."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Consider for travelers with specific risk factors."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Very low malaria risk (limited areas)",
            "Meningococcal vaccine required for Hajj/Umrah",
            "MERS occasionally reported",
            "Excellent healthcare facilities",
            "Very high temperatures in summer"
        ]
    },
    jordan: {
        name: "Jordan",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for most travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Consider for travelers visiting rural areas."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "No malaria risk",
            "Good healthcare in Amman",
            "Tap water generally safe",
            "Very dry climate - stay hydrated",
            "Altitude variations in Petra area"
        ]
    },
    lebanon: {
        name: "Lebanon",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for most travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Consider for travelers visiting rural areas."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "No malaria risk",
            "Healthcare system under strain",
            "Tap water quality varies",
            "Security situation - check travel advisories",
            "Cholera cases reported recently"
        ]
    },
    // MORE CENTRAL AMERICA
    "el salvador": {
        name: "El Salvador",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "No malaria risk",
            "Dengue, Zika, and chikungunya present",
            "Drink bottled water",
            "Healthcare limited outside San Salvador",
            "Crime can be a concern"
        ]
    },
    honduras: {
        name: "Honduras",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in some rural areas",
            "Dengue, Zika, and chikungunya present",
            "Drink only bottled water",
            "Healthcare facilities limited",
            "Crime and security concerns"
        ]
    },
    nicaragua: {
        name: "Nicaragua",
        required: [],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk in some areas",
            "Dengue widespread",
            "Drink only bottled water",
            "Healthcare facilities limited",
            "Political situation - check advisories"
        ]
    },
    // OCEANIA
    "papua new guinea": {
        name: "Papua New Guinea",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥1 year of age."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            },
            {
                name: "Japanese Encephalitis",
                description: "Consider if visiting rural areas or staying >1 month."
            },
            {
                name: "Rabies",
                description: "Consider for adventure travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk throughout most of country",
            "Dengue and Zika present",
            "Drink only bottled or boiled water",
            "Healthcare facilities very limited",
            "Security concerns in some areas"
        ]
    },
    "solomon islands": {
        name: "Solomon Islands",
        required: [
            {
                name: "Yellow Fever",
                description: "Required if arriving from countries with risk of Yellow Fever transmission and ≥1 year of age."
            }
        ],
        recommended: [
            {
                name: "Hepatitis A",
                description: "Recommended for all travelers."
            },
            {
                name: "Hepatitis B",
                description: "Recommended for all unvaccinated travelers."
            },
            {
                name: "Typhoid",
                description: "Recommended for most travelers."
            }
        ],
        routine: [
            "Measles-Mumps-Rubella (MMR)",
            "Diphtheria-Tetanus-Pertussis",
            "Chickenpox (Varicella)",
            "Polio",
            "Influenza (Flu)",
            "COVID-19"
        ],
        notes: [
            "Malaria risk throughout islands",
            "Dengue and Zika present",
            "Drink only bottled or boiled water",
            "Healthcare facilities very limited",
            "Remote location limits medical evacuation"
        ]
    }
};

// All countries for dropdown
const allCountries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia",
    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
    "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia", "Botswana", "Brazil", "Brunei", "Bulgaria",
    "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic",
    "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba",
    "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominican Republic", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
    "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia",
    "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan",
    "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
    "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
    "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
    "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
    "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
    "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
    "Saint Kitts", "Saint Lucia", "Saint Vincent", "Samoa", "San Marino", "Sao Tome", "Saudi Arabia",
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
    "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
    "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
    "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
    "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const searchInput = document.getElementById('countrySearch');
const dropdown = document.getElementById('dropdown');
const resultsDiv = document.getElementById('results');
let selectedCountry = null;

// Filter and show dropdown
searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    
    if (query.length === 0) {
        dropdown.classList.remove('show');
        return;
    }

    const filtered = allCountries.filter(country => 
        country.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
        dropdown.innerHTML = '<div class="dropdown-item">No countries found</div>';
        dropdown.classList.add('show');
        return;
    }

    dropdown.innerHTML = filtered.map(country => 
        `<div class="dropdown-item" data-country="${country}">${country}</div>`
    ).join('');
    
    dropdown.classList.add('show');

    // Add click handlers
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            const country = this.dataset.country;
            if (country) {
                selectCountry(country);
            }
        });
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});

function selectCountry(country) {
    searchInput.value = country;
    dropdown.classList.remove('show');
    selectedCountry = country;
    displayResults(country);
}

function displayResults(country) {
    const countryKey = country.toLowerCase();
    const data = vaccineDatabase[countryKey];

    if (!data) {
        resultsDiv.innerHTML = `
            <div class="country-header">
                <h2>${country}</h2>
                <p>Travel vaccine information</p>
            </div>
            <div class="alert-box">
                <strong>Limited Information Available</strong>
                <p>Detailed vaccine data for ${country} is not currently in our database. Please consult the <a href="https://wwwnc.cdc.gov/travel/destinations/list" target="_blank">CDC Travelers' Health website</a> for the most current recommendations.</p>
                <p style="margin-top: 12px;">General recommendations for all travelers:</p>
                <ul style="margin-top: 8px;">
                    <li>Be up-to-date on routine vaccines (MMR, Tdap, Flu, COVID-19)</li>
                    <li>Consider Hepatitis A and Hepatitis B vaccines</li>
                    <li>Consult a travel medicine specialist 4-6 weeks before departure</li>
                </ul>
            </div>
        `;
        return;
    }

    let html = `
        <div class="country-header">
            <h2>${data.name}</h2>
            <p>CDC-recommended vaccines and health information</p>
        </div>
    `;

    // Required vaccines
    if (data.required && data.required.length > 0) {
        html += `
            <div class="section">
                <h3 class="section-title">🚨 Required Vaccines</h3>
                <div class="vaccine-grid">
        `;
        data.required.forEach(vaccine => {
            html += `
                <div class="vaccine-card required">
                    <span class="badge required">Required</span>
                    <div class="vaccine-name">${vaccine.name}</div>
                    <div class="vaccine-description">${vaccine.description}</div>
                </div>
            `;
        });
        html += `</div></div>`;
    }

    // Recommended vaccines
    if (data.recommended && data.recommended.length > 0) {
        html += `
            <div class="section">
                <h3 class="section-title">💉 Recommended Vaccines</h3>
                <div class="vaccine-grid">
        `;
        data.recommended.forEach(vaccine => {
            html += `
                <div class="vaccine-card recommended">
                    <span class="badge recommended">Recommended</span>
                    <div class="vaccine-name">${vaccine.name}</div>
                    <div class="vaccine-description">${vaccine.description}</div>
                </div>
            `;
        });
        html += `</div></div>`;
    }

    // Routine vaccines
    if (data.routine && data.routine.length > 0) {
        html += `
            <div class="section">
                <h3 class="section-title">🔄 Routine Vaccines</h3>
                <p style="color: #666; margin-bottom: 15px;">Make sure you're up-to-date on these routine vaccines before any international travel:</p>
                <div class="vaccine-grid">
        `;
        data.routine.forEach(vaccine => {
            html += `
                <div class="vaccine-card routine">
                    <span class="badge routine">Routine</span>
                    <div class="vaccine-name">${vaccine}</div>
                </div>
            `;
        });
        html += `</div></div>`;
    }

    // Important notes
    if (data.notes && data.notes.length > 0) {
        html += `
            <div class="info-box">
                <h3>📋 Important Health & Safety Notes</h3>
                <ul>
        `;
        data.notes.forEach(note => {
            html += `<li>${note}</li>`;
        });
        html += `
                </ul>
            </div>
        `;
    }

    // General advice
    html += `
        <div class="alert-box">
            <strong>Before You Travel:</strong>
            <p>Schedule an appointment with a travel medicine specialist 4-6 weeks before departure. Some vaccines require multiple doses over time. Bring your vaccination records when you travel.</p>
        </div>
    `;

    resultsDiv.innerHTML = html;
}

// Show placeholder on load
resultsDiv.innerHTML = `
    <div class="no-selection">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2v20M2 12h20"></path>
        </svg>
        <h3 style="color: #999; font-size: 1.3em;">Search for your destination above</h3>
        <p style="color: #bbb; margin-top: 10px;">We'll show you CDC-recommended vaccines and health tips</p>
    </div>
`;