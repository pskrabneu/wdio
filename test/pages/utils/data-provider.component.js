class DataProviderComponent {
  get randomLetter() {
    const alphabeth = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
      'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return alphabeth[Math.floor(Math.random() * alphabeth.length)];
  }

  get randomNumber() {
    const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return num[Math.floor(Math.random() * num.length)];
  }

  get randomTerritory() {
    const tr = ['Bath and North East Somerset', 'Bedfordshire', 'Berkshire',
      'Blackburn with Darwen', 'Blackpool', 'Borough of Bedford', 'Bournemouth',
      'Bristol', 'Buckinghamshire', 'Cambridgeshire', 'Central Bedfordshire',
      'Cheshire', 'Cheshire East', 'Cheshire West and Chester', 'Christchurch',
      'City of London', 'Cornwall', 'County Durham', 'Cumbria', 'Derbyshire',
      'Devon', 'Dorset', 'East Riding of Yorkshire', 'East Sussex', 'Essex',
      'Gloucestershire', 'Greater London', 'Greater Manchester', 'Halton',
      'Hampshire', 'Herefordshire', 'Hertfordshire', 'Isle of Wight', 'Kent',
      'Lancashire', 'Leicestershire', 'Lincolnshire', 'Luton', 'Merseyside',
      'Middlesbrough', 'Norfolk', 'North East Lincolnshire', 'North Lincolnshire',
      'North Somerset', 'North Yorkshire', 'Northamptonshire', 'Northumberland',
      'Nottinghamshire', 'Oxfordshire', 'Redcar and Cleveland', 'Rutland',
      'Shropshire', 'Somerset', 'South Yorkshire', 'Staffordshire', 'Stockton-on-Tees',
      'Suffolk', 'Surrey', 'Swindon', 'Tyne and Wear', 'Warrington, England',
      'Warwickshire', 'West Midlands', 'West Sussex', 'West Yorkshire',
      'Wiltshire', 'Worcestershire', 'York'];
    return tr[Math.floor(Math.random() * tr.length)];
  }

  get randomUser() {
    const users = ['Auto Automation', 'Auto Vrpauto', 'Auto01 Automation',
      'Auto02 Automation'];
    return users[Math.floor(Math.random() * users.length)];
  }

  get randomSalesRegion() {
    const salesRegions = ['Bombardier', 'TestAuto Region', 'TestAuto Region 1'];
    return salesRegions[Math.floor(Math.random() * salesRegions.length)];
  }

  get randomParentTeamName() {
    const parentTeamNames = ['A Team', 'All Stars', 'Amigos', 'Avengers', 'Bannermen',
      'Best of the Best', 'Bosses', 'Champions', 'Crew', 'Dominators', 'Dream Team',
      'Elite', 'Force', 'Goal Diggers', 'Heatwave', 'Hot Shots', 'Hustle', 'Icons',
      'Justice League', 'Legends', 'Lightning', 'Maniacs', 'Masters', 'Monarchy',
      'Naturals', 'Ninjas', 'Outliers', 'Peak Performers', 'Power', 'Rebels',
      'Revolution', 'Ringmasters', 'Rule Breakers', 'Shakedown', 'Squad', 'Titans',
      'Tribe', 'United', 'Vikings', 'Warriors', 'Wolf Pack'];
    return parentTeamNames[Math.floor(Math.random() * parentTeamNames.length)];
  }

  // return random Post Code
  get randomPostCode() {
    const postCodes = ['IG8 0US', 'SR5 3RQ', 'NG8 5SB', 'W5 3DD', 'BA21 3TS', 'WS7 2NL',
      'TR6 0LL', 'EH26 8BZ', 'TN13 3TL', 'TS19 0QR', 'PA4 9DL', 'E1W 9LD', 'LD6 5EW',
      'NW7 1RH', 'TS22 5RQ', 'HP12 4PQ', 'EH52 5RU', 'B61 0UH', 'NW3 2NW', 'TS17 6BG',
      'NE3 2SH', 'ME12 3GJ', 'DL1 4RU', 'DY6 7UZ', 'LL11 3EJ', 'N12 7DT', 'CM12 0NZ',
      'SW12 8SQ', 'M12 6AA', 'HP19 9AU', 'BA22 9TY', 'BS16 6JE', 'TS14 8BP', 'YO17 9JZ',
      'CF83 8AJ', 'B69 3AD', 'WA5 0EQ', 'BB3 9BA', 'B64 7QA', 'DD10 9JN', 'NG12 2EQ',
      'SO21 1GG', 'KY7 6RL', 'HP3 9JJ', 'N1P 3AG', 'BS14 0QF', 'TS6 0HP', 'DE56 0EB',
      'CM77 8ZZ', 'SE23 9AJ', 'B43 7HX', 'KA17 0FB', 'SE28 8FZ', 'PA4 9QF', 'NW5 3DE',
      'YO13 0EN', 'GL52 2PN', 'ME15 9GB', 'YO25 6UG', 'S5 9BS', 'CT6 6LL', 'UB4 9FA',
      'EH30 9RP', 'CO4 5XY', 'DD6 8RT', 'BA1 9AH', 'CW2 5HB', 'TN10 4HR', 'SE1P 5SU',
      'NR31 7QN', 'CM1 1LX', 'PL30 3NZ', 'BA2 8BX', 'PL4 7AX', 'CO12 4XS', 'W1U 8BF',
      'YO31 7ER', 'TN6 3FJ', 'NE26 3TA', 'RG9 2BN', 'SE16 3FP', 'EH49 7PE', 'FY5 1DA',
      'CW2 5JL', 'PE30 4YY', 'TS10 1NF', 'BR7 5LW', 'M33 5AT', 'S5 7PQ', 'ME8 9LP',
      'WV9 5BU', 'GL14 9AX', 'RM1 2GP', 'M6 5NP', 'L35 1RW', 'ST6 6TN', 'CF40 2PB',
      'SE3 9AG', 'CV11 6TB', 'GY4 6LW', 'CO4 9FJ', 'LS8 3BU', 'BB4 8HX', 'ST8 7RL',
      'DN4 5ED', 'CV1 1EA', 'WA7 6HD', 'BD1 1TU', 'NN11 4AA', 'SW15 2ER', 'NR26 8PX',
      'PE8 6PY', 'CV34 4HJ', 'CF81 8PT', 'NR25 6TA', 'PE13 2RB', 'CO9 3DE', 'PL20 7RA',
      'NR33 7NN', 'NG32 3JY', 'IP27 0AY', 'B10 9LH', 'CV35 7TB', 'PH10 7HA', 'SL6 6SP',
      'RG42 4BR', 'BT75 0PW', 'TN13 3HG', 'GL20 8SS', 'NW10 8LP', 'NG6 8JZ', 'BT46 5EQ',
      'LA7 7QP', 'DY6 8HP', 'SE1 4XG', 'SW17 9HB', 'W1K 2SU', 'SA1 6SF', 'CM16 4QJ',
      'HU12 9JG', 'ML4 1NH', 'BT62 3GJ', 'SW18 5AG', 'W5 4SD', 'BD23 5JL', 'WS12 2NX',
      'TS5 4EE', 'CM8 2YS', 'SW12 0JH', 'NE20 9EE', 'EX20 1FZ', 'L2 2DQ', 'WN2 1UX',
      'S61 2SG', 'NG23 6TG', 'KT20 5QA', 'BN22 8EH', 'EH22 1PX', 'BN10 8GL', 'PL1 2EW',
      'SW4 7QD', 'DH8 5JN', 'GL16 7QA', 'S65 1LZ', 'GU12 4NG', 'DE55 4NR', 'SE1 0BU',
      'HR4 0EL', 'HU6 8LF', 'M7 4DJ', 'HD5 8RS', 'HX3 8EY', 'CM3 3JE', 'CM21 9NB', 'DH8 8AS',
      'M35 9ND', 'PE1 4QH', 'NG9 3LP', 'NG8 5DX', 'WV10 7AL', 'W9 1DB', 'N1 2DA', 'CM4 0DD',
      'PO21 5GA', 'CH42 8LX', 'WF8 4QL', 'GL50 2XE', 'TS7 8LE', 'LL55 1BJ', 'PE7 1XA',
      'KT15 1DX', 'IP28 8QZ', 'BN15 8SB', 'PO10 8QL', 'NW3 7EY', 'CB3 9LL', 'LL74 8RG',
      'TA1 2QA', 'HA1 3GP', 'CF62 6QS'];
    return postCodes[Math.floor(Math.random() * postCodes.length)];
  }
}

export default new DataProviderComponent();
