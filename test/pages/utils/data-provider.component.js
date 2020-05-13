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
}

export default new DataProviderComponent();
