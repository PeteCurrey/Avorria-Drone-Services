// lib/locations-data.ts

export interface LocationData {
  slug: string
  name: string
  region: string
  population: string
  description: string
}

export const locationsData: LocationData[] = [
  { slug: 'london', name: 'London', region: 'Greater London', population: '8.9M', description: 'Comprehensive drone services across all 32 boroughs, including restricted airspace operations in the City and Westminster.' },
  { slug: 'manchester', name: 'Manchester', region: 'Greater Manchester', population: '550k', description: 'Professional UAV solutions for the North West industrial hub, from MediaCityUK to Greater Manchester construction sites.' },
  { slug: 'birmingham', name: 'Birmingham', region: 'West Midlands', population: '1.1M', description: 'Aerial intelligence for the Midlands heartland, supporting infrastructure, transport, and commercial development.' },
  { slug: 'leeds', name: 'Leeds', region: 'West Yorkshire', population: '790k', description: 'Expert drone inspection and surveying across West Yorkshire and the M62 corridor.' },
  { slug: 'sheffield', name: 'Sheffield', region: 'South Yorkshire', population: '580k', description: 'Specialist aerial services for the Steel City and surrounding South Yorkshire industrial landscape.' },
  { slug: 'bristol', name: 'Bristol', region: 'South West', population: '460k', description: 'UAV surveying and media production for the South West technology and engineering cluster.' },
  { slug: 'edinburgh', name: 'Edinburgh', region: 'Scotland', population: '480k', description: 'Professional drone operations across the Scottish capital, including heritage site recording and infrastructure checks.' },
  { slug: 'glasgow', name: 'Glasgow', region: 'Scotland', population: '630k', description: 'Industrial and commercial drone services for the West of Scotland and the Clyde Valley.' },
  { slug: 'liverpool', name: 'Liverpool', region: 'Merseyside', population: '500k', description: 'UAV solutions for the maritime, logistics, and regeneration projects across Merseyside.' },
  { slug: 'newcastle', name: 'Newcastle', region: 'North East', population: '300k', description: 'Drone inspection and mapping for the North East industrial and offshore sectors.' },
  { slug: 'nottingham', name: 'Nottingham', region: 'East Midlands', population: '330k', description: 'Aerial surveying and photography across the East Midlands and the Trent Valley.' },
  { slug: 'leicester', name: 'Leicester', region: 'East Midlands', population: '350k', description: 'Professional UAV operations for Leicestershire commerce and agriculture.' },
  { slug: 'coventry', name: 'Coventry', region: 'West Midlands', population: '370k', description: 'Aerial intelligence for the automotive and manufacturing hub of the West Midlands.' },
  { slug: 'cardiff', name: 'Cardiff', region: 'Wales', population: '360k', description: 'Expert drone services for the Welsh capital and the South Wales industrial belt.' },
  { slug: 'bradford', name: 'Bradford', region: 'West Yorkshire', population: '530k', description: 'Industrial drone surveying and photography across West Yorkshire.' },
  { slug: 'belfast', name: 'Belfast', region: 'Northern Ireland', population: '340k', description: 'Professional UAV services across Northern Ireland, from Titanic Quarter to regional infrastructure.' },
  { slug: 'hull', name: 'Hull', region: 'East Yorkshire', population: '260k', description: 'Drone inspection and mapping for the Humber estuary industrial and energy sectors.' },
  { slug: 'stoke-on-trent', name: 'Stoke-on-Trent', region: 'Staffordshire', population: '250k', description: 'Aerial surveying and photography for the Potteries and North Staffordshire.' },
  { slug: 'wolverhampton', name: 'Wolverhampton', region: 'West Midlands', population: '260k', description: 'UAV operations for the Black Country industrial and regeneration zones.' },
  { slug: 'exeter', name: 'Exeter', region: 'Devon', population: '130k', description: 'Specialist drone services across Devon and the wider South West peninsula.' },
  { slug: 'plymouth', name: 'Plymouth', region: 'Devon', population: '260k', description: 'Maritime and industrial drone solutions for the South West coast.' },
  { slug: 'derby', name: 'Derby', region: 'Derbyshire', population: '260k', description: 'Aerial intelligence for the Derbyshire manufacturing and engineering hub.' },
  { slug: 'southampton', name: 'Southampton', region: 'Hampshire', population: '250k', description: 'UAV maritime and commercial inspection for the South Coast logistics hub.' },
  { slug: 'oxford', name: 'Oxford', region: 'Oxfordshire', population: '150k', description: 'Professional drone operations for the Oxfordshire technology and research corridor.' },
  { slug: 'cambridge', name: 'Cambridge', region: 'Cambridgeshire', population: '120k', description: 'Aerial surveying and mapping for the Silicon Fen and East of England.' },
  { slug: 'norwich', name: 'Norwich', region: 'Norfolk', population: '140k', description: 'Drone services for the East Anglian agricultural and energy sectors.' },
  { slug: 'ipswich', name: 'Ipswich', region: 'Suffolk', population: '130k', description: 'UAV solutions for the Suffolk coast and Eastern logistics networks.' },
  { slug: 'brighton', name: 'Brighton', region: 'East Sussex', population: '290k', description: 'Aerial photography and commercial drone services for the South Coast.' },
  { slug: 'reading', name: 'Reading', region: 'Berkshire', population: '160k', description: 'Professional UAV operations for the Thames Valley technology hub.' },
  { slug: 'milton-keynes', name: 'Milton Keynes', region: 'Buckinghamshire', population: '230k', description: 'Drone inspection and mapping for the logistics and development hub of the South East.' },
  { slug: 'york', name: 'York', region: 'North Yorkshire', population: '210k', description: 'Heritage and commercial drone services across North Yorkshire.' },
  { slug: 'sunderland', name: 'Sunderland', region: 'Tyne and Wear', population: '270k', description: 'Industrial drone operations for the North East coast and manufacturing zones.' },
  { slug: 'middlesbrough', name: 'Middlesbrough', region: 'North Yorkshire', population: '140k', description: 'Teesside industrial drone inspection and asset mapping.' },
  { slug: 'peterborough', name: 'Peterborough', region: 'Cambridgeshire', population: '200k', description: 'Aerial intelligence for the East of England logistics and development sectors.' },
  { slug: 'luton', name: 'Luton', region: 'Bedfordshire', population: '210k', description: 'Expert drone services across Bedfordshire and the M1 corridor.' },
  { slug: 'aberdeen', name: 'Aberdeen', region: 'Scotland', population: '200k', description: 'Energy and industrial drone solutions for the North East of Scotland.' },
  { slug: 'dundee', name: 'Dundee', region: 'Scotland', population: '150k', description: 'Professional UAV operations for the Tayside region.' },
  { slug: 'inverness', name: 'Inverness', region: 'Scotland', population: '50k', description: 'Specialist drone services for the Highlands and Islands.' },
  { slug: 'swansea', name: 'Swansea', region: 'Wales', population: '240k', description: 'Industrial and coastal drone solutions for South West Wales.' },
  { slug: 'newport', name: 'Newport', region: 'Wales', population: '150k', description: 'Professional UAV services for the M4 corridor and South East Wales.' },
]
