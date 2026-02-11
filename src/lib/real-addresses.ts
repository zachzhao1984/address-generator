export interface RealAddress {
  street: string
  city: string
  state: string
  stateAbbr: string
  zipCode: string
  county: string
}

export const REAL_ADDRESSES: RealAddress[] = [
  // Alabama
  { street: "710 20th St S", city: "Birmingham", state: "Alabama", stateAbbr: "AL", zipCode: "35233", county: "Jefferson County" },
  { street: "2100 Park Pl N", city: "Birmingham", state: "Alabama", stateAbbr: "AL", zipCode: "35203", county: "Jefferson County" },
  { street: "600 Dexter Ave", city: "Montgomery", state: "Alabama", stateAbbr: "AL", zipCode: "36104", county: "Montgomery County" },
  { street: "200 Monroe St", city: "Montgomery", state: "Alabama", stateAbbr: "AL", zipCode: "36104", county: "Montgomery County" },
  { street: "315 Church St NW", city: "Huntsville", state: "Alabama", stateAbbr: "AL", zipCode: "35801", county: "Madison County" },
  { street: "1 Tranquility Base", city: "Huntsville", state: "Alabama", stateAbbr: "AL", zipCode: "35805", county: "Madison County" },
  { street: "111 S Royal St", city: "Mobile", state: "Alabama", stateAbbr: "AL", zipCode: "36602", county: "Mobile County" },
  { street: "850 S Court St", city: "Montgomery", state: "Alabama", stateAbbr: "AL", zipCode: "36104", county: "Montgomery County" },
  { street: "401 9th Ave", city: "Tuscaloosa", state: "Alabama", stateAbbr: "AL", zipCode: "35401", county: "Tuscaloosa County" },
  { street: "1901 University Blvd", city: "Tuscaloosa", state: "Alabama", stateAbbr: "AL", zipCode: "35401", county: "Tuscaloosa County" },

  // Alaska
  { street: "625 C St", city: "Anchorage", state: "Alaska", stateAbbr: "AK", zipCode: "99501", county: "Anchorage Borough" },
  { street: "3601 C St", city: "Anchorage", state: "Alaska", stateAbbr: "AK", zipCode: "99503", county: "Anchorage Borough" },
  { street: "524 W 4th Ave", city: "Anchorage", state: "Alaska", stateAbbr: "AK", zipCode: "99501", county: "Anchorage Borough" },
  { street: "100 Cushman St", city: "Fairbanks", state: "Alaska", stateAbbr: "AK", zipCode: "99701", county: "Fairbanks North Star Borough" },
  { street: "155 S Seward St", city: "Juneau", state: "Alaska", stateAbbr: "AK", zipCode: "99801", county: "Juneau Borough" },
  { street: "400 Willoughby Ave", city: "Juneau", state: "Alaska", stateAbbr: "AK", zipCode: "99801", county: "Juneau Borough" },
  { street: "1108 F St", city: "Anchorage", state: "Alaska", stateAbbr: "AK", zipCode: "99501", county: "Anchorage Borough" },
  { street: "501 Railway Ave", city: "Seward", state: "Alaska", stateAbbr: "AK", zipCode: "99664", county: "Kenai Peninsula Borough" },

  // Arizona
  { street: "17 E Washington St", city: "Phoenix", state: "Arizona", stateAbbr: "AZ", zipCode: "85004", county: "Maricopa County" },
  { street: "1625 N Central Ave", city: "Phoenix", state: "Arizona", stateAbbr: "AZ", zipCode: "85004", county: "Maricopa County" },
  { street: "2301 N Central Ave", city: "Phoenix", state: "Arizona", stateAbbr: "AZ", zipCode: "85004", county: "Maricopa County" },
  { street: "130 W Congress St", city: "Tucson", state: "Arizona", stateAbbr: "AZ", zipCode: "85701", county: "Pima County" },
  { street: "20 N Center St", city: "Mesa", state: "Arizona", stateAbbr: "AZ", zipCode: "85201", county: "Maricopa County" },
  { street: "3939 E Campbell Ave", city: "Phoenix", state: "Arizona", stateAbbr: "AZ", zipCode: "85018", county: "Maricopa County" },
  { street: "7575 E Main St", city: "Scottsdale", state: "Arizona", stateAbbr: "AZ", zipCode: "85251", county: "Maricopa County" },
  { street: "240 N Center St", city: "Mesa", state: "Arizona", stateAbbr: "AZ", zipCode: "85201", county: "Maricopa County" },
  { street: "5005 E McDowell Rd", city: "Phoenix", state: "Arizona", stateAbbr: "AZ", zipCode: "85008", county: "Maricopa County" },
  { street: "150 W Cushing St", city: "Tucson", state: "Arizona", stateAbbr: "AZ", zipCode: "85701", county: "Pima County" },

  // Arkansas
  { street: "500 W Markham St", city: "Little Rock", state: "Arkansas", stateAbbr: "AR", zipCode: "72201", county: "Pulaski County" },
  { street: "100 Rock St", city: "Little Rock", state: "Arkansas", stateAbbr: "AR", zipCode: "72201", county: "Pulaski County" },
  { street: "200 E 8th St", city: "Little Rock", state: "Arkansas", stateAbbr: "AR", zipCode: "72201", county: "Pulaski County" },
  { street: "101 E Capitol Ave", city: "Little Rock", state: "Arkansas", stateAbbr: "AR", zipCode: "72201", county: "Pulaski County" },
  { street: "623 Garrison Ave", city: "Fort Smith", state: "Arkansas", stateAbbr: "AR", zipCode: "72901", county: "Sebastian County" },
  { street: "100 W Center St", city: "Fayetteville", state: "Arkansas", stateAbbr: "AR", zipCode: "72701", county: "Washington County" },
  { street: "200 W Broadway St", city: "North Little Rock", state: "Arkansas", stateAbbr: "AR", zipCode: "72114", county: "Pulaski County" },
  { street: "306 Main St", city: "Pine Bluff", state: "Arkansas", stateAbbr: "AR", zipCode: "71601", county: "Jefferson County" },

  // California
  { street: "200 N Spring St", city: "Los Angeles", state: "California", stateAbbr: "CA", zipCode: "90012", county: "Los Angeles County" },
  { street: "630 W 5th St", city: "Los Angeles", state: "California", stateAbbr: "CA", zipCode: "90071", county: "Los Angeles County" },
  { street: "1 Dr Carlton B Goodlett Pl", city: "San Francisco", state: "California", stateAbbr: "CA", zipCode: "94102", county: "San Francisco County" },
  { street: "202 C St", city: "San Diego", state: "California", stateAbbr: "CA", zipCode: "92101", county: "San Diego County" },
  { street: "200 E Santa Clara St", city: "San Jose", state: "California", stateAbbr: "CA", zipCode: "95113", county: "Santa Clara County" },
  { street: "915 I St", city: "Sacramento", state: "California", stateAbbr: "CA", zipCode: "95814", county: "Sacramento County" },
  { street: "411 W Ocean Blvd", city: "Long Beach", state: "California", stateAbbr: "CA", zipCode: "90802", county: "Los Angeles County" },
  { street: "1 Frank H Ogawa Plaza", city: "Oakland", state: "California", stateAbbr: "CA", zipCode: "94612", county: "Alameda County" },
  { street: "100 W Broadway", city: "Anaheim", state: "California", stateAbbr: "CA", zipCode: "92805", county: "Orange County" },
  { street: "3900 Main St", city: "Riverside", state: "California", stateAbbr: "CA", zipCode: "92522", county: "Riverside County" },
  { street: "300 E Chapman Ave", city: "Fullerton", state: "California", stateAbbr: "CA", zipCode: "92832", county: "Orange County" },
  { street: "685 Harriman Pl", city: "San Bernardino", state: "California", stateAbbr: "CA", zipCode: "92408", county: "San Bernardino County" },
  { street: "1150 N State St", city: "Los Angeles", state: "California", stateAbbr: "CA", zipCode: "90012", county: "Los Angeles County" },
  { street: "500 W Temple St", city: "Los Angeles", state: "California", stateAbbr: "CA", zipCode: "90012", county: "Los Angeles County" },

  // Colorado
  { street: "1437 Bannock St", city: "Denver", state: "Colorado", stateAbbr: "CO", zipCode: "80202", county: "Denver County" },
  { street: "200 E Colfax Ave", city: "Denver", state: "Colorado", stateAbbr: "CO", zipCode: "80203", county: "Denver County" },
  { street: "30 S Nevada Ave", city: "Colorado Springs", state: "Colorado", stateAbbr: "CO", zipCode: "80903", county: "El Paso County" },
  { street: "300 LaPorte Ave", city: "Fort Collins", state: "Colorado", stateAbbr: "CO", zipCode: "80521", county: "Larimer County" },
  { street: "15151 E Alameda Pkwy", city: "Aurora", state: "Colorado", stateAbbr: "CO", zipCode: "80012", county: "Arapahoe County" },
  { street: "1001 11th Ave", city: "Greeley", state: "Colorado", stateAbbr: "CO", zipCode: "80631", county: "Weld County" },
  { street: "1777 Broadway", city: "Boulder", state: "Colorado", stateAbbr: "CO", zipCode: "80302", county: "Boulder County" },
  { street: "100 W Pikes Peak Ave", city: "Colorado Springs", state: "Colorado", stateAbbr: "CO", zipCode: "80903", county: "El Paso County" },

  // Connecticut
  { street: "550 Main St", city: "Hartford", state: "Connecticut", stateAbbr: "CT", zipCode: "06103", county: "Hartford County" },
  { street: "165 Capitol Ave", city: "Hartford", state: "Connecticut", stateAbbr: "CT", zipCode: "06106", county: "Hartford County" },
  { street: "200 Orange St", city: "New Haven", state: "Connecticut", stateAbbr: "CT", zipCode: "06510", county: "New Haven County" },
  { street: "888 Washington Blvd", city: "Stamford", state: "Connecticut", stateAbbr: "CT", zipCode: "06901", county: "Fairfield County" },
  { street: "45 Lyon Terrace", city: "Bridgeport", state: "Connecticut", stateAbbr: "CT", zipCode: "06604", county: "Fairfield County" },
  { street: "999 Broad St", city: "Bridgeport", state: "Connecticut", stateAbbr: "CT", zipCode: "06604", county: "Fairfield County" },
  { street: "236 Grand St", city: "Waterbury", state: "Connecticut", stateAbbr: "CT", zipCode: "06702", county: "New Haven County" },
  { street: "110 Main St", city: "Norwalk", state: "Connecticut", stateAbbr: "CT", zipCode: "06851", county: "Fairfield County" },

  // Delaware
  { street: "800 N French St", city: "Wilmington", state: "Delaware", stateAbbr: "DE", zipCode: "19801", county: "New Castle County" },
  { street: "411 N Walnut St", city: "Wilmington", state: "Delaware", stateAbbr: "DE", zipCode: "19801", county: "New Castle County" },
  { street: "15 The Green", city: "Dover", state: "Delaware", stateAbbr: "DE", zipCode: "19901", county: "Kent County" },
  { street: "44 The Green", city: "Dover", state: "Delaware", stateAbbr: "DE", zipCode: "19901", county: "Kent County" },
  { street: "67 Reads Way", city: "New Castle", state: "Delaware", stateAbbr: "DE", zipCode: "19720", county: "New Castle County" },
  { street: "10 E Pine St", city: "Georgetown", state: "Delaware", stateAbbr: "DE", zipCode: "19947", county: "Sussex County" },
  { street: "320 S State St", city: "Dover", state: "Delaware", stateAbbr: "DE", zipCode: "19901", county: "Kent County" },
  { street: "500 N Market St", city: "Wilmington", state: "Delaware", stateAbbr: "DE", zipCode: "19801", county: "New Castle County" },

  // Florida
  { street: "175 NW 1st Ave", city: "Miami", state: "Florida", stateAbbr: "FL", zipCode: "33128", county: "Miami-Dade County" },
  { street: "306 E Jackson St", city: "Tampa", state: "Florida", stateAbbr: "FL", zipCode: "33602", county: "Hillsborough County" },
  { street: "400 S Orange Ave", city: "Orlando", state: "Florida", stateAbbr: "FL", zipCode: "32801", county: "Orange County" },
  { street: "117 W Duval St", city: "Jacksonville", state: "Florida", stateAbbr: "FL", zipCode: "32202", county: "Duval County" },
  { street: "100 S Andrews Ave", city: "Fort Lauderdale", state: "Florida", stateAbbr: "FL", zipCode: "33301", county: "Broward County" },
  { street: "175 5th St N", city: "St. Petersburg", state: "Florida", stateAbbr: "FL", zipCode: "33701", county: "Pinellas County" },
  { street: "300 S Adams St", city: "Tallahassee", state: "Florida", stateAbbr: "FL", zipCode: "32301", county: "Leon County" },
  { street: "401 SE 2nd Ave", city: "Miami", state: "Florida", stateAbbr: "FL", zipCode: "33131", county: "Miami-Dade County" },
  { street: "600 S Andrews Ave", city: "Fort Lauderdale", state: "Florida", stateAbbr: "FL", zipCode: "33301", county: "Broward County" },
  { street: "1515 E Silver Springs Blvd", city: "Ocala", state: "Florida", stateAbbr: "FL", zipCode: "34470", county: "Marion County" },

  // Georgia
  { street: "55 Trinity Ave SW", city: "Atlanta", state: "Georgia", stateAbbr: "GA", zipCode: "30303", county: "Fulton County" },
  { street: "1 CNN Center", city: "Atlanta", state: "Georgia", stateAbbr: "GA", zipCode: "30303", county: "Fulton County" },
  { street: "225 Peachtree St NE", city: "Atlanta", state: "Georgia", stateAbbr: "GA", zipCode: "30303", county: "Fulton County" },
  { street: "530 Greene St", city: "Augusta", state: "Georgia", stateAbbr: "GA", zipCode: "30901", county: "Richmond County" },
  { street: "100 10th St", city: "Columbus", state: "Georgia", stateAbbr: "GA", zipCode: "31901", county: "Muscogee County" },
  { street: "200 E Bay St", city: "Savannah", state: "Georgia", stateAbbr: "GA", zipCode: "31401", county: "Chatham County" },
  { street: "700 Mulberry St", city: "Macon", state: "Georgia", stateAbbr: "GA", zipCode: "31201", county: "Bibb County" },
  { street: "300 S Jackson St", city: "Athens", state: "Georgia", stateAbbr: "GA", zipCode: "30601", county: "Clarke County" },

  // Hawaii
  { street: "530 S King St", city: "Honolulu", state: "Hawaii", stateAbbr: "HI", zipCode: "96813", county: "Honolulu County" },
  { street: "1000 Ala Moana Blvd", city: "Honolulu", state: "Hawaii", stateAbbr: "HI", zipCode: "96814", county: "Honolulu County" },
  { street: "2500 Campus Rd", city: "Honolulu", state: "Hawaii", stateAbbr: "HI", zipCode: "96822", county: "Honolulu County" },
  { street: "1525 Bernice St", city: "Honolulu", state: "Hawaii", stateAbbr: "HI", zipCode: "96817", county: "Honolulu County" },
  { street: "200 S High St", city: "Wailuku", state: "Hawaii", stateAbbr: "HI", zipCode: "96793", county: "Maui County" },
  { street: "25 Aupuni St", city: "Hilo", state: "Hawaii", stateAbbr: "HI", zipCode: "96720", county: "Hawaii County" },
  { street: "300 Ala Moana Blvd", city: "Honolulu", state: "Hawaii", stateAbbr: "HI", zipCode: "96813", county: "Honolulu County" },
  { street: "4444 Rice St", city: "Lihue", state: "Hawaii", stateAbbr: "HI", zipCode: "96766", county: "Kauai County" },

  // Idaho
  { street: "150 N Capitol Blvd", city: "Boise", state: "Idaho", stateAbbr: "ID", zipCode: "83702", county: "Ada County" },
  { street: "700 W State St", city: "Boise", state: "Idaho", stateAbbr: "ID", zipCode: "83702", county: "Ada County" },
  { street: "715 S Capitol Blvd", city: "Boise", state: "Idaho", stateAbbr: "ID", zipCode: "83702", county: "Ada County" },
  { street: "33 E Broadway Ave", city: "Meridian", state: "Idaho", stateAbbr: "ID", zipCode: "83642", county: "Ada County" },
  { street: "411 3rd St S", city: "Nampa", state: "Idaho", stateAbbr: "ID", zipCode: "83651", county: "Canyon County" },
  { street: "308 2nd Ave E", city: "Twin Falls", state: "Idaho", stateAbbr: "ID", zipCode: "83301", county: "Twin Falls County" },
  { street: "457 Broadway St", city: "Idaho Falls", state: "Idaho", stateAbbr: "ID", zipCode: "83402", county: "Bonneville County" },
  { street: "501 N Garfield Ave", city: "Pocatello", state: "Idaho", stateAbbr: "ID", zipCode: "83204", county: "Bannock County" },

  // Illinois
  { street: "121 N LaSalle St", city: "Chicago", state: "Illinois", stateAbbr: "IL", zipCode: "60602", county: "Cook County" },
  { street: "111 S Michigan Ave", city: "Chicago", state: "Illinois", stateAbbr: "IL", zipCode: "60603", county: "Cook County" },
  { street: "233 S Wacker Dr", city: "Chicago", state: "Illinois", stateAbbr: "IL", zipCode: "60606", county: "Cook County" },
  { street: "200 E Randolph St", city: "Chicago", state: "Illinois", stateAbbr: "IL", zipCode: "60601", county: "Cook County" },
  { street: "44 W Downer Pl", city: "Aurora", state: "Illinois", stateAbbr: "IL", zipCode: "60506", county: "Kane County" },
  { street: "425 E State St", city: "Rockford", state: "Illinois", stateAbbr: "IL", zipCode: "61104", county: "Winnebago County" },
  { street: "300 N 7th St", city: "Springfield", state: "Illinois", stateAbbr: "IL", zipCode: "62701", county: "Sangamon County" },
  { street: "505 N Broadway", city: "Joliet", state: "Illinois", stateAbbr: "IL", zipCode: "60435", county: "Will County" },
  { street: "400 Main St", city: "Peoria", state: "Illinois", stateAbbr: "IL", zipCode: "61602", county: "Peoria County" },
  { street: "1700 W Washington St", city: "Springfield", state: "Illinois", stateAbbr: "IL", zipCode: "62702", county: "Sangamon County" },

  // Indiana
  { street: "200 E Washington St", city: "Indianapolis", state: "Indiana", stateAbbr: "IN", zipCode: "46204", county: "Marion County" },
  { street: "1 Indiana Square", city: "Indianapolis", state: "Indiana", stateAbbr: "IN", zipCode: "46204", county: "Marion County" },
  { street: "1 W Main St", city: "Fort Wayne", state: "Indiana", stateAbbr: "IN", zipCode: "46802", county: "Allen County" },
  { street: "1 NW Riverside Dr", city: "Evansville", state: "Indiana", stateAbbr: "IN", zipCode: "47708", county: "Vanderburgh County" },
  { street: "227 W Jefferson Blvd", city: "South Bend", state: "Indiana", stateAbbr: "IN", zipCode: "46601", county: "St. Joseph County" },
  { street: "1 Civic Square", city: "Carmel", state: "Indiana", stateAbbr: "IN", zipCode: "46032", county: "Hamilton County" },
  { street: "1 Municipal Dr", city: "Fishers", state: "Indiana", stateAbbr: "IN", zipCode: "46038", county: "Hamilton County" },
  { street: "401 N Morton St", city: "Bloomington", state: "Indiana", stateAbbr: "IN", zipCode: "47404", county: "Monroe County" },

  // Iowa
  { street: "400 Robert D Ray Dr", city: "Des Moines", state: "Iowa", stateAbbr: "IA", zipCode: "50309", county: "Polk County" },
  { street: "1007 E Grand Ave", city: "Des Moines", state: "Iowa", stateAbbr: "IA", zipCode: "50319", county: "Polk County" },
  { street: "101 1st St SE", city: "Cedar Rapids", state: "Iowa", stateAbbr: "IA", zipCode: "52401", county: "Linn County" },
  { street: "226 W 2nd St", city: "Davenport", state: "Iowa", stateAbbr: "IA", zipCode: "52801", county: "Scott County" },
  { street: "405 Douglas St", city: "Sioux City", state: "Iowa", stateAbbr: "IA", zipCode: "51101", county: "Woodbury County" },
  { street: "410 E Washington St", city: "Iowa City", state: "Iowa", stateAbbr: "IA", zipCode: "52240", county: "Johnson County" },
  { street: "200 E 4th St", city: "Waterloo", state: "Iowa", stateAbbr: "IA", zipCode: "50703", county: "Black Hawk County" },
  { street: "515 Clark Ave", city: "Ames", state: "Iowa", stateAbbr: "IA", zipCode: "50010", county: "Story County" },

  // Kansas
  { street: "455 N Main St", city: "Wichita", state: "Kansas", stateAbbr: "KS", zipCode: "67202", county: "Sedgwick County" },
  { street: "300 SW 10th Ave", city: "Topeka", state: "Kansas", stateAbbr: "KS", zipCode: "66612", county: "Shawnee County" },
  { street: "8500 Santa Fe Dr", city: "Overland Park", state: "Kansas", stateAbbr: "KS", zipCode: "66212", county: "Johnson County" },
  { street: "100 E Santa Fe St", city: "Olathe", state: "Kansas", stateAbbr: "KS", zipCode: "66061", county: "Johnson County" },
  { street: "701 N 7th St", city: "Kansas City", state: "Kansas", stateAbbr: "KS", zipCode: "66101", county: "Wyandotte County" },
  { street: "6 E 6th St", city: "Lawrence", state: "Kansas", stateAbbr: "KS", zipCode: "66044", county: "Douglas County" },
  { street: "1101 Poyntz Ave", city: "Manhattan", state: "Kansas", stateAbbr: "KS", zipCode: "66502", county: "Riley County" },
  { street: "300 W Ash St", city: "Salina", state: "Kansas", stateAbbr: "KS", zipCode: "67401", county: "Saline County" },

  // Kentucky
  { street: "527 W Jefferson St", city: "Louisville", state: "Kentucky", stateAbbr: "KY", zipCode: "40202", county: "Jefferson County" },
  { street: "200 E Main St", city: "Lexington", state: "Kentucky", stateAbbr: "KY", zipCode: "40507", county: "Fayette County" },
  { street: "700 Capitol Ave", city: "Frankfort", state: "Kentucky", stateAbbr: "KY", zipCode: "40601", county: "Franklin County" },
  { street: "1001 College St", city: "Bowling Green", state: "Kentucky", stateAbbr: "KY", zipCode: "42101", county: "Warren County" },
  { street: "101 E 4th St", city: "Owensboro", state: "Kentucky", stateAbbr: "KY", zipCode: "42303", county: "Daviess County" },
  { street: "25 W 2nd St", city: "Covington", state: "Kentucky", stateAbbr: "KY", zipCode: "41011", county: "Kenton County" },
  { street: "601 W Main St", city: "Louisville", state: "Kentucky", stateAbbr: "KY", zipCode: "40202", county: "Jefferson County" },
  { street: "100 Civic Center Dr", city: "Nicholasville", state: "Kentucky", stateAbbr: "KY", zipCode: "40356", county: "Jessamine County" },

  // Louisiana
  { street: "1300 Perdido St", city: "New Orleans", state: "Louisiana", stateAbbr: "LA", zipCode: "70112", county: "Orleans Parish" },
  { street: "222 St Louis St", city: "Baton Rouge", state: "Louisiana", stateAbbr: "LA", zipCode: "70802", county: "East Baton Rouge Parish" },
  { street: "505 Travis St", city: "Shreveport", state: "Louisiana", stateAbbr: "LA", zipCode: "71101", county: "Caddo Parish" },
  { street: "735 Lafayette St", city: "Lafayette", state: "Louisiana", stateAbbr: "LA", zipCode: "70501", county: "Lafayette Parish" },
  { street: "701 Ryan St", city: "Lake Charles", state: "Louisiana", stateAbbr: "LA", zipCode: "70601", county: "Calcasieu Parish" },
  { street: "1515 Poydras St", city: "New Orleans", state: "Louisiana", stateAbbr: "LA", zipCode: "70112", county: "Orleans Parish" },
  { street: "620 Benton Rd", city: "Bossier City", state: "Louisiana", stateAbbr: "LA", zipCode: "71111", county: "Bossier Parish" },
  { street: "300 Main St", city: "Baton Rouge", state: "Louisiana", stateAbbr: "LA", zipCode: "70801", county: "East Baton Rouge Parish" },

  // Maine
  { street: "389 Congress St", city: "Portland", state: "Maine", stateAbbr: "ME", zipCode: "04101", county: "Cumberland County" },
  { street: "1 City Center", city: "Portland", state: "Maine", stateAbbr: "ME", zipCode: "04101", county: "Cumberland County" },
  { street: "27 Pine St", city: "Lewiston", state: "Maine", stateAbbr: "ME", zipCode: "04240", county: "Androscoggin County" },
  { street: "73 Harlow St", city: "Bangor", state: "Maine", stateAbbr: "ME", zipCode: "04401", county: "Penobscot County" },
  { street: "210 Maine St", city: "Brunswick", state: "Maine", stateAbbr: "ME", zipCode: "04011", county: "Cumberland County" },
  { street: "25 Cottage St", city: "Sanford", state: "Maine", stateAbbr: "ME", zipCode: "04073", county: "York County" },
  { street: "500 Congress St", city: "Portland", state: "Maine", stateAbbr: "ME", zipCode: "04101", county: "Cumberland County" },
  { street: "145 Main St", city: "Biddeford", state: "Maine", stateAbbr: "ME", zipCode: "04005", county: "York County" },

  // Maryland
  { street: "100 N Holliday St", city: "Baltimore", state: "Maryland", stateAbbr: "MD", zipCode: "21202", county: "Baltimore City" },
  { street: "601 Light St", city: "Baltimore", state: "Maryland", stateAbbr: "MD", zipCode: "21230", county: "Baltimore City" },
  { street: "100 State Cir", city: "Annapolis", state: "Maryland", stateAbbr: "MD", zipCode: "21401", county: "Anne Arundel County" },
  { street: "101 N Carroll St", city: "Frederick", state: "Maryland", stateAbbr: "MD", zipCode: "21701", county: "Frederick County" },
  { street: "111 Maryland Ave", city: "Rockville", state: "Maryland", stateAbbr: "MD", zipCode: "20850", county: "Montgomery County" },
  { street: "31 W Patrick St", city: "Frederick", state: "Maryland", stateAbbr: "MD", zipCode: "21701", county: "Frederick County" },
  { street: "1 Harry S Truman Dr", city: "Annapolis", state: "Maryland", stateAbbr: "MD", zipCode: "21401", county: "Anne Arundel County" },
  { street: "4330 East West Hwy", city: "Bethesda", state: "Maryland", stateAbbr: "MD", zipCode: "20814", county: "Montgomery County" },

  // Massachusetts
  { street: "1 City Hall Square", city: "Boston", state: "Massachusetts", stateAbbr: "MA", zipCode: "02201", county: "Suffolk County" },
  { street: "206 Washington St", city: "Boston", state: "Massachusetts", stateAbbr: "MA", zipCode: "02109", county: "Suffolk County" },
  { street: "455 Main St", city: "Worcester", state: "Massachusetts", stateAbbr: "MA", zipCode: "01608", county: "Worcester County" },
  { street: "36 Court St", city: "Springfield", state: "Massachusetts", stateAbbr: "MA", zipCode: "01103", county: "Hampden County" },
  { street: "795 Massachusetts Ave", city: "Cambridge", state: "Massachusetts", stateAbbr: "MA", zipCode: "02139", county: "Middlesex County" },
  { street: "50 Milk St", city: "Boston", state: "Massachusetts", stateAbbr: "MA", zipCode: "02109", county: "Suffolk County" },
  { street: "300 Crown Colony Dr", city: "Quincy", state: "Massachusetts", stateAbbr: "MA", zipCode: "02169", county: "Norfolk County" },
  { street: "1305 Hancock St", city: "Quincy", state: "Massachusetts", stateAbbr: "MA", zipCode: "02169", county: "Norfolk County" },

  // Michigan
  { street: "2 Woodward Ave", city: "Detroit", state: "Michigan", stateAbbr: "MI", zipCode: "48226", county: "Wayne County" },
  { street: "300 Monroe Ave NW", city: "Grand Rapids", state: "Michigan", stateAbbr: "MI", zipCode: "49503", county: "Kent County" },
  { street: "1 Marquette Ave", city: "Detroit", state: "Michigan", stateAbbr: "MI", zipCode: "48226", county: "Wayne County" },
  { street: "124 W Michigan Ave", city: "Lansing", state: "Michigan", stateAbbr: "MI", zipCode: "48933", county: "Ingham County" },
  { street: "301 E Huron St", city: "Ann Arbor", state: "Michigan", stateAbbr: "MI", zipCode: "48104", county: "Washtenaw County" },
  { street: "1120 S Washington Ave", city: "Lansing", state: "Michigan", stateAbbr: "MI", zipCode: "48910", county: "Ingham County" },
  { street: "1025 E Maple Rd", city: "Troy", state: "Michigan", stateAbbr: "MI", zipCode: "48083", county: "Oakland County" },
  { street: "905 Saginaw St", city: "Flint", state: "Michigan", stateAbbr: "MI", zipCode: "48502", county: "Genesee County" },

  // Minnesota
  { street: "350 S 5th St", city: "Minneapolis", state: "Minnesota", stateAbbr: "MN", zipCode: "55415", county: "Hennepin County" },
  { street: "15 W Kellogg Blvd", city: "St. Paul", state: "Minnesota", stateAbbr: "MN", zipCode: "55102", county: "Ramsey County" },
  { street: "201 4th St SE", city: "Rochester", state: "Minnesota", stateAbbr: "MN", zipCode: "55904", county: "Olmsted County" },
  { street: "411 W 1st St", city: "Duluth", state: "Minnesota", stateAbbr: "MN", zipCode: "55802", county: "St. Louis County" },
  { street: "1800 W Old Shakopee Rd", city: "Bloomington", state: "Minnesota", stateAbbr: "MN", zipCode: "55431", county: "Hennepin County" },
  { street: "300 E Main St", city: "Anoka", state: "Minnesota", stateAbbr: "MN", zipCode: "55303", county: "Anoka County" },
  { street: "75 5th St W", city: "St. Paul", state: "Minnesota", stateAbbr: "MN", zipCode: "55102", county: "Ramsey County" },
  { street: "400 2nd Ave S", city: "Minneapolis", state: "Minnesota", stateAbbr: "MN", zipCode: "55401", county: "Hennepin County" },

  // Mississippi
  { street: "219 S President St", city: "Jackson", state: "Mississippi", stateAbbr: "MS", zipCode: "39201", county: "Hinds County" },
  { street: "400 High St", city: "Jackson", state: "Mississippi", stateAbbr: "MS", zipCode: "39202", county: "Hinds County" },
  { street: "1100 22nd Ave", city: "Gulfport", state: "Mississippi", stateAbbr: "MS", zipCode: "39501", county: "Harrison County" },
  { street: "710 Front St", city: "Hattiesburg", state: "Mississippi", stateAbbr: "MS", zipCode: "39401", county: "Forrest County" },
  { street: "386 Lameuse St", city: "Biloxi", state: "Mississippi", stateAbbr: "MS", zipCode: "39530", county: "Harrison County" },
  { street: "601 22nd Ave", city: "Meridian", state: "Mississippi", stateAbbr: "MS", zipCode: "39301", county: "Lauderdale County" },
  { street: "200 W Main St", city: "Tupelo", state: "Mississippi", stateAbbr: "MS", zipCode: "38804", county: "Lee County" },
  { street: "800 22nd Ave", city: "Meridian", state: "Mississippi", stateAbbr: "MS", zipCode: "39301", county: "Lauderdale County" },

  // Missouri
  { street: "414 E 12th St", city: "Kansas City", state: "Missouri", stateAbbr: "MO", zipCode: "64106", county: "Jackson County" },
  { street: "1520 Market St", city: "St. Louis", state: "Missouri", stateAbbr: "MO", zipCode: "63103", county: "St. Louis City" },
  { street: "830 Boonville Ave", city: "Springfield", state: "Missouri", stateAbbr: "MO", zipCode: "65802", county: "Greene County" },
  { street: "701 E Broadway", city: "Columbia", state: "Missouri", stateAbbr: "MO", zipCode: "65201", county: "Boone County" },
  { street: "111 N Independence Ave", city: "Independence", state: "Missouri", stateAbbr: "MO", zipCode: "64050", county: "Jackson County" },
  { street: "201 W 3rd St", city: "Joplin", state: "Missouri", stateAbbr: "MO", zipCode: "64801", county: "Jasper County" },
  { street: "600 Broadway", city: "St. Louis", state: "Missouri", stateAbbr: "MO", zipCode: "63102", county: "St. Louis City" },
  { street: "100 S 4th St", city: "St. Charles", state: "Missouri", stateAbbr: "MO", zipCode: "63301", county: "St. Charles County" },

  // Montana
  { street: "210 N 27th St", city: "Billings", state: "Montana", stateAbbr: "MT", zipCode: "59101", county: "Yellowstone County" },
  { street: "435 Ryman St", city: "Missoula", state: "Montana", stateAbbr: "MT", zipCode: "59802", county: "Missoula County" },
  { street: "2 Park Dr S", city: "Great Falls", state: "Montana", stateAbbr: "MT", zipCode: "59401", county: "Cascade County" },
  { street: "121 N Rouse Ave", city: "Bozeman", state: "Montana", stateAbbr: "MT", zipCode: "59715", county: "Gallatin County" },
  { street: "316 N Park Ave", city: "Helena", state: "Montana", stateAbbr: "MT", zipCode: "59601", county: "Lewis and Clark County" },
  { street: "155 W Granite St", city: "Butte", state: "Montana", stateAbbr: "MT", zipCode: "59701", county: "Silver Bow County" },
  { street: "201 1st Ave E", city: "Kalispell", state: "Montana", stateAbbr: "MT", zipCode: "59901", county: "Flathead County" },
  { street: "6 Last Chance Gulch", city: "Helena", state: "Montana", stateAbbr: "MT", zipCode: "59601", county: "Lewis and Clark County" },

  // Nebraska
  { street: "1819 Farnam St", city: "Omaha", state: "Nebraska", stateAbbr: "NE", zipCode: "68183", county: "Douglas County" },
  { street: "555 S 10th St", city: "Lincoln", state: "Nebraska", stateAbbr: "NE", zipCode: "68508", county: "Lancaster County" },
  { street: "1210 Golden Gate Dr", city: "Papillion", state: "Nebraska", stateAbbr: "NE", zipCode: "68046", county: "Sarpy County" },
  { street: "100 E 1st St", city: "Grand Island", state: "Nebraska", stateAbbr: "NE", zipCode: "68801", county: "Hall County" },
  { street: "2401 N Columbia Ave", city: "Kearney", state: "Nebraska", stateAbbr: "NE", zipCode: "68847", county: "Buffalo County" },
  { street: "400 S 14th St", city: "Lincoln", state: "Nebraska", stateAbbr: "NE", zipCode: "68508", county: "Lancaster County" },
  { street: "1001 Farnam St", city: "Omaha", state: "Nebraska", stateAbbr: "NE", zipCode: "68102", county: "Douglas County" },
  { street: "129 N 10th St", city: "Lincoln", state: "Nebraska", stateAbbr: "NE", zipCode: "68508", county: "Lancaster County" },

  // Nevada
  { street: "495 S Main St", city: "Las Vegas", state: "Nevada", stateAbbr: "NV", zipCode: "89101", county: "Clark County" },
  { street: "240 Water St", city: "Henderson", state: "Nevada", stateAbbr: "NV", zipCode: "89015", county: "Clark County" },
  { street: "1 E 1st St", city: "Reno", state: "Nevada", stateAbbr: "NV", zipCode: "89501", county: "Washoe County" },
  { street: "2250 Las Vegas Blvd N", city: "North Las Vegas", state: "Nevada", stateAbbr: "NV", zipCode: "89030", county: "Clark County" },
  { street: "201 N Carson St", city: "Carson City", state: "Nevada", stateAbbr: "NV", zipCode: "89701", county: "Carson City" },
  { street: "100 N Stewart St", city: "Carson City", state: "Nevada", stateAbbr: "NV", zipCode: "89701", county: "Carson City" },
  { street: "3300 S Las Vegas Blvd", city: "Las Vegas", state: "Nevada", stateAbbr: "NV", zipCode: "89109", county: "Clark County" },
  { street: "400 S Virginia St", city: "Reno", state: "Nevada", stateAbbr: "NV", zipCode: "89501", county: "Washoe County" },

  // New Hampshire
  { street: "1 City Hall Plaza", city: "Manchester", state: "New Hampshire", stateAbbr: "NH", zipCode: "03101", county: "Hillsborough County" },
  { street: "229 Main St", city: "Nashua", state: "New Hampshire", stateAbbr: "NH", zipCode: "03060", county: "Hillsborough County" },
  { street: "41 Green St", city: "Concord", state: "New Hampshire", stateAbbr: "NH", zipCode: "03301", county: "Merrimack County" },
  { street: "288 Central Ave", city: "Dover", state: "New Hampshire", stateAbbr: "NH", zipCode: "03820", county: "Strafford County" },
  { street: "107 N Main St", city: "Concord", state: "New Hampshire", stateAbbr: "NH", zipCode: "03301", county: "Merrimack County" },
  { street: "31 Wakefield St", city: "Rochester", state: "New Hampshire", stateAbbr: "NH", zipCode: "03867", county: "Strafford County" },
  { street: "14 Court St", city: "Laconia", state: "New Hampshire", stateAbbr: "NH", zipCode: "03246", county: "Belknap County" },
  { street: "150 Greenleaf Ave", city: "Portsmouth", state: "New Hampshire", stateAbbr: "NH", zipCode: "03801", county: "Rockingham County" },

  // New Jersey
  { street: "920 Broad St", city: "Newark", state: "New Jersey", stateAbbr: "NJ", zipCode: "07102", county: "Essex County" },
  { street: "280 Grove St", city: "Jersey City", state: "New Jersey", stateAbbr: "NJ", zipCode: "07302", county: "Hudson County" },
  { street: "155 Market St", city: "Paterson", state: "New Jersey", stateAbbr: "NJ", zipCode: "07505", county: "Passaic County" },
  { street: "50 Winfield Scott Plaza", city: "Elizabeth", state: "New Jersey", stateAbbr: "NJ", zipCode: "07201", county: "Union County" },
  { street: "319 E State St", city: "Trenton", state: "New Jersey", stateAbbr: "NJ", zipCode: "08608", county: "Mercer County" },
  { street: "100 Hamilton Plaza", city: "Paterson", state: "New Jersey", stateAbbr: "NJ", zipCode: "07505", county: "Passaic County" },
  { street: "1 Municipal Plaza", city: "Edison", state: "New Jersey", stateAbbr: "NJ", zipCode: "08817", county: "Middlesex County" },
  { street: "1 Quaker Bridge Mall Dr", city: "Lawrenceville", state: "New Jersey", stateAbbr: "NJ", zipCode: "08648", county: "Mercer County" },

  // New Mexico
  { street: "1 Civic Plaza NW", city: "Albuquerque", state: "New Mexico", stateAbbr: "NM", zipCode: "87102", county: "Bernalillo County" },
  { street: "700 N Main St", city: "Las Cruces", state: "New Mexico", stateAbbr: "NM", zipCode: "88001", county: "Dona Ana County" },
  { street: "200 Lincoln Ave", city: "Santa Fe", state: "New Mexico", stateAbbr: "NM", zipCode: "87501", county: "Santa Fe County" },
  { street: "3200 Civic Center Cir NE", city: "Rio Rancho", state: "New Mexico", stateAbbr: "NM", zipCode: "87144", county: "Sandoval County" },
  { street: "425 N Richardson Ave", city: "Roswell", state: "New Mexico", stateAbbr: "NM", zipCode: "88201", county: "Chaves County" },
  { street: "800 Municipal Dr", city: "Farmington", state: "New Mexico", stateAbbr: "NM", zipCode: "87401", county: "San Juan County" },
  { street: "100 Old Town Rd NW", city: "Albuquerque", state: "New Mexico", stateAbbr: "NM", zipCode: "87104", county: "Bernalillo County" },
  { street: "491 Old Santa Fe Trail", city: "Santa Fe", state: "New Mexico", stateAbbr: "NM", zipCode: "87501", county: "Santa Fe County" },

  // New York
  { street: "City Hall Park", city: "New York", state: "New York", stateAbbr: "NY", zipCode: "10007", county: "New York County" },
  { street: "350 5th Ave", city: "New York", state: "New York", stateAbbr: "NY", zipCode: "10118", county: "New York County" },
  { street: "1 Rockefeller Plaza", city: "New York", state: "New York", stateAbbr: "NY", zipCode: "10020", county: "New York County" },
  { street: "65 Niagara Square", city: "Buffalo", state: "New York", stateAbbr: "NY", zipCode: "14202", county: "Erie County" },
  { street: "30 Church St", city: "Rochester", state: "New York", stateAbbr: "NY", zipCode: "14614", county: "Monroe County" },
  { street: "40 N Pearl St", city: "Albany", state: "New York", stateAbbr: "NY", zipCode: "12207", county: "Albany County" },
  { street: "87 N Clinton Ave", city: "Rochester", state: "New York", stateAbbr: "NY", zipCode: "14604", county: "Monroe County" },
  { street: "233 Broadway", city: "New York", state: "New York", stateAbbr: "NY", zipCode: "10279", county: "New York County" },
  { street: "201 E Washington St", city: "Syracuse", state: "New York", stateAbbr: "NY", zipCode: "13202", county: "Onondaga County" },
  { street: "1 Penn Plaza", city: "New York", state: "New York", stateAbbr: "NY", zipCode: "10119", county: "New York County" },

  // North Carolina
  { street: "600 E 4th St", city: "Charlotte", state: "North Carolina", stateAbbr: "NC", zipCode: "28202", county: "Mecklenburg County" },
  { street: "1 Exchange Plaza", city: "Raleigh", state: "North Carolina", stateAbbr: "NC", zipCode: "27601", county: "Wake County" },
  { street: "300 W Washington St", city: "Greensboro", state: "North Carolina", stateAbbr: "NC", zipCode: "27401", county: "Guilford County" },
  { street: "101 City Hall Plaza", city: "Durham", state: "North Carolina", stateAbbr: "NC", zipCode: "27701", county: "Durham County" },
  { street: "100 E 1st St", city: "Winston-Salem", state: "North Carolina", stateAbbr: "NC", zipCode: "27101", county: "Forsyth County" },
  { street: "433 Hay St", city: "Fayetteville", state: "North Carolina", stateAbbr: "NC", zipCode: "28301", county: "Cumberland County" },
  { street: "316 N Front St", city: "Wilmington", state: "North Carolina", stateAbbr: "NC", zipCode: "28401", county: "New Hanover County" },
  { street: "70 Court Plaza", city: "Asheville", state: "North Carolina", stateAbbr: "NC", zipCode: "28801", county: "Buncombe County" },

  // North Dakota
  { street: "200 N 3rd St", city: "Fargo", state: "North Dakota", stateAbbr: "ND", zipCode: "58102", county: "Cass County" },
  { street: "221 N 5th St", city: "Bismarck", state: "North Dakota", stateAbbr: "ND", zipCode: "58501", county: "Burleigh County" },
  { street: "255 N 4th St", city: "Grand Forks", state: "North Dakota", stateAbbr: "ND", zipCode: "58203", county: "Grand Forks County" },
  { street: "515 2nd Ave SW", city: "Minot", state: "North Dakota", stateAbbr: "ND", zipCode: "58701", county: "Ward County" },
  { street: "600 E Boulevard Ave", city: "Bismarck", state: "North Dakota", stateAbbr: "ND", zipCode: "58505", county: "Burleigh County" },
  { street: "800 Simonton St", city: "Mandan", state: "North Dakota", stateAbbr: "ND", zipCode: "58554", county: "Morton County" },
  { street: "102 3rd St N", city: "Fargo", state: "North Dakota", stateAbbr: "ND", zipCode: "58102", county: "Cass County" },
  { street: "1205 1st Ave S", city: "Fargo", state: "North Dakota", stateAbbr: "ND", zipCode: "58103", county: "Cass County" },

  // Ohio
  { street: "90 W Broad St", city: "Columbus", state: "Ohio", stateAbbr: "OH", zipCode: "43215", county: "Franklin County" },
  { street: "601 Lakeside Ave E", city: "Cleveland", state: "Ohio", stateAbbr: "OH", zipCode: "44114", county: "Cuyahoga County" },
  { street: "801 Plum St", city: "Cincinnati", state: "Ohio", stateAbbr: "OH", zipCode: "45202", county: "Hamilton County" },
  { street: "1 Government Center", city: "Toledo", state: "Ohio", stateAbbr: "OH", zipCode: "43604", county: "Lucas County" },
  { street: "166 S High St", city: "Akron", state: "Ohio", stateAbbr: "OH", zipCode: "44308", county: "Summit County" },
  { street: "101 W 3rd St", city: "Dayton", state: "Ohio", stateAbbr: "OH", zipCode: "45402", county: "Montgomery County" },
  { street: "218 Cleveland Ave NW", city: "Canton", state: "Ohio", stateAbbr: "OH", zipCode: "44702", county: "Stark County" },
  { street: "26 S Main St", city: "Youngstown", state: "Ohio", stateAbbr: "OH", zipCode: "44503", county: "Mahoning County" },

  // Oklahoma
  { street: "200 N Walker Ave", city: "Oklahoma City", state: "Oklahoma", stateAbbr: "OK", zipCode: "73102", county: "Oklahoma County" },
  { street: "175 E 2nd St", city: "Tulsa", state: "Oklahoma", stateAbbr: "OK", zipCode: "74103", county: "Tulsa County" },
  { street: "201 W Gray St", city: "Norman", state: "Oklahoma", stateAbbr: "OK", zipCode: "73069", county: "Cleveland County" },
  { street: "220 S Main St", city: "Broken Arrow", state: "Oklahoma", stateAbbr: "OK", zipCode: "74012", county: "Tulsa County" },
  { street: "100 E 1st St", city: "Edmond", state: "Oklahoma", stateAbbr: "OK", zipCode: "73034", county: "Oklahoma County" },
  { street: "103 SW 4th St", city: "Lawton", state: "Oklahoma", stateAbbr: "OK", zipCode: "73501", county: "Comanche County" },
  { street: "301 W Broadway Ave", city: "Enid", state: "Oklahoma", stateAbbr: "OK", zipCode: "73701", county: "Garfield County" },
  { street: "723 S Lewis Ave", city: "Tulsa", state: "Oklahoma", stateAbbr: "OK", zipCode: "74104", county: "Tulsa County" },

  // Oregon
  { street: "1221 SW 4th Ave", city: "Portland", state: "Oregon", stateAbbr: "OR", zipCode: "97204", county: "Multnomah County" },
  { street: "555 Liberty St SE", city: "Salem", state: "Oregon", stateAbbr: "OR", zipCode: "97301", county: "Marion County" },
  { street: "125 E 8th Ave", city: "Eugene", state: "Oregon", stateAbbr: "OR", zipCode: "97401", county: "Lane County" },
  { street: "1333 NW Eastman Pkwy", city: "Gresham", state: "Oregon", stateAbbr: "OR", zipCode: "97030", county: "Multnomah County" },
  { street: "150 E Main St", city: "Hillsboro", state: "Oregon", stateAbbr: "OR", zipCode: "97123", county: "Washington County" },
  { street: "710 NW Wall St", city: "Bend", state: "Oregon", stateAbbr: "OR", zipCode: "97703", county: "Deschutes County" },
  { street: "411 W 8th St", city: "Medford", state: "Oregon", stateAbbr: "OR", zipCode: "97501", county: "Jackson County" },
  { street: "225 5th St", city: "Springfield", state: "Oregon", stateAbbr: "OR", zipCode: "97477", county: "Lane County" },

  // Pennsylvania
  { street: "1401 JFK Blvd", city: "Philadelphia", state: "Pennsylvania", stateAbbr: "PA", zipCode: "19102", county: "Philadelphia County" },
  { street: "414 Grant St", city: "Pittsburgh", state: "Pennsylvania", stateAbbr: "PA", zipCode: "15219", county: "Allegheny County" },
  { street: "435 Hamilton St", city: "Allentown", state: "Pennsylvania", stateAbbr: "PA", zipCode: "18101", county: "Lehigh County" },
  { street: "503 N Office St", city: "Harrisburg", state: "Pennsylvania", stateAbbr: "PA", zipCode: "17120", county: "Dauphin County" },
  { street: "626 State St", city: "Erie", state: "Pennsylvania", stateAbbr: "PA", zipCode: "16501", county: "Erie County" },
  { street: "10 N Church St", city: "Bethlehem", state: "Pennsylvania", stateAbbr: "PA", zipCode: "18018", county: "Northampton County" },
  { street: "120 N Duke St", city: "Lancaster", state: "Pennsylvania", stateAbbr: "PA", zipCode: "17602", county: "Lancaster County" },
  { street: "340 N Washington Ave", city: "Scranton", state: "Pennsylvania", stateAbbr: "PA", zipCode: "18503", county: "Lackawanna County" },

  // Rhode Island
  { street: "25 Dorrance St", city: "Providence", state: "Rhode Island", stateAbbr: "RI", zipCode: "02903", county: "Providence County" },
  { street: "3275 Post Rd", city: "Warwick", state: "Rhode Island", stateAbbr: "RI", zipCode: "02886", county: "Kent County" },
  { street: "869 Park Ave", city: "Cranston", state: "Rhode Island", stateAbbr: "RI", zipCode: "02910", county: "Providence County" },
  { street: "137 Roosevelt Ave", city: "Pawtucket", state: "Rhode Island", stateAbbr: "RI", zipCode: "02860", county: "Providence County" },
  { street: "1 Frank Coelho Dr", city: "East Providence", state: "Rhode Island", stateAbbr: "RI", zipCode: "02914", county: "Providence County" },
  { street: "169 Main St", city: "Woonsocket", state: "Rhode Island", stateAbbr: "RI", zipCode: "02895", county: "Providence County" },
  { street: "100 Westminster St", city: "Providence", state: "Rhode Island", stateAbbr: "RI", zipCode: "02903", county: "Providence County" },
  { street: "1 Capitol Hill", city: "Providence", state: "Rhode Island", stateAbbr: "RI", zipCode: "02908", county: "Providence County" },

  // South Carolina
  { street: "80 Broad St", city: "Charleston", state: "South Carolina", stateAbbr: "SC", zipCode: "29401", county: "Charleston County" },
  { street: "1737 Main St", city: "Columbia", state: "South Carolina", stateAbbr: "SC", zipCode: "29201", county: "Richland County" },
  { street: "206 Washington St", city: "Greenville", state: "South Carolina", stateAbbr: "SC", zipCode: "29601", county: "Greenville County" },
  { street: "100 Church St", city: "Spartanburg", state: "South Carolina", stateAbbr: "SC", zipCode: "29306", county: "Spartanburg County" },
  { street: "155 Johnston St", city: "Rock Hill", state: "South Carolina", stateAbbr: "SC", zipCode: "29730", county: "York County" },
  { street: "1100 Main St", city: "Columbia", state: "South Carolina", stateAbbr: "SC", zipCode: "29201", county: "Richland County" },
  { street: "200 Meeting St", city: "Charleston", state: "South Carolina", stateAbbr: "SC", zipCode: "29401", county: "Charleston County" },
  { street: "2500 Decker Blvd", city: "Columbia", state: "South Carolina", stateAbbr: "SC", zipCode: "29206", county: "Richland County" },

  // South Dakota
  { street: "224 W 9th St", city: "Sioux Falls", state: "South Dakota", stateAbbr: "SD", zipCode: "57104", county: "Minnehaha County" },
  { street: "300 6th St", city: "Rapid City", state: "South Dakota", stateAbbr: "SD", zipCode: "57701", county: "Pennington County" },
  { street: "123 S Main St", city: "Aberdeen", state: "South Dakota", stateAbbr: "SD", zipCode: "57401", county: "Brown County" },
  { street: "311 3rd Ave", city: "Brookings", state: "South Dakota", stateAbbr: "SD", zipCode: "57006", county: "Brookings County" },
  { street: "222 E Capitol Ave", city: "Pierre", state: "South Dakota", stateAbbr: "SD", zipCode: "57501", county: "Hughes County" },
  { street: "500 E Capitol Ave", city: "Pierre", state: "South Dakota", stateAbbr: "SD", zipCode: "57501", county: "Hughes County" },
  { street: "200 3rd Ave SW", city: "Watertown", state: "South Dakota", stateAbbr: "SD", zipCode: "57201", county: "Codington County" },
  { street: "612 N Main St", city: "Mitchell", state: "South Dakota", stateAbbr: "SD", zipCode: "57301", county: "Davison County" },

  // Tennessee
  { street: "1 Public Square", city: "Nashville", state: "Tennessee", stateAbbr: "TN", zipCode: "37201", county: "Davidson County" },
  { street: "125 N Main St", city: "Memphis", state: "Tennessee", stateAbbr: "TN", zipCode: "38103", county: "Shelby County" },
  { street: "400 Main St", city: "Knoxville", state: "Tennessee", stateAbbr: "TN", zipCode: "37902", county: "Knox County" },
  { street: "101 E 11th St", city: "Chattanooga", state: "Tennessee", stateAbbr: "TN", zipCode: "37402", county: "Hamilton County" },
  { street: "1 Public Square", city: "Clarksville", state: "Tennessee", stateAbbr: "TN", zipCode: "37040", county: "Montgomery County" },
  { street: "111 W Vernon Ave", city: "Murfreesboro", state: "Tennessee", stateAbbr: "TN", zipCode: "37130", county: "Rutherford County" },
  { street: "109 3rd Ave S", city: "Franklin", state: "Tennessee", stateAbbr: "TN", zipCode: "37064", county: "Williamson County" },
  { street: "600 S Gay St", city: "Knoxville", state: "Tennessee", stateAbbr: "TN", zipCode: "37902", county: "Knox County" },

  // Texas
  { street: "901 Bagby St", city: "Houston", state: "Texas", stateAbbr: "TX", zipCode: "77002", county: "Harris County" },
  { street: "100 Military Plaza", city: "San Antonio", state: "Texas", stateAbbr: "TX", zipCode: "78205", county: "Bexar County" },
  { street: "1500 Marilla St", city: "Dallas", state: "Texas", stateAbbr: "TX", zipCode: "75201", county: "Dallas County" },
  { street: "301 W 2nd St", city: "Austin", state: "Texas", stateAbbr: "TX", zipCode: "78701", county: "Travis County" },
  { street: "200 Texas St", city: "Fort Worth", state: "Texas", stateAbbr: "TX", zipCode: "76102", county: "Tarrant County" },
  { street: "300 N Campbell St", city: "El Paso", state: "Texas", stateAbbr: "TX", zipCode: "79901", county: "El Paso County" },
  { street: "1000 Throckmorton St", city: "Fort Worth", state: "Texas", stateAbbr: "TX", zipCode: "76102", county: "Tarrant County" },
  { street: "411 W 13th St", city: "Austin", state: "Texas", stateAbbr: "TX", zipCode: "78701", county: "Travis County" },
  { street: "101 W Abram St", city: "Arlington", state: "Texas", stateAbbr: "TX", zipCode: "76010", county: "Tarrant County" },
  { street: "1201 Leopard St", city: "Corpus Christi", state: "Texas", stateAbbr: "TX", zipCode: "78401", county: "Nueces County" },
  { street: "2000 Commerce St", city: "Dallas", state: "Texas", stateAbbr: "TX", zipCode: "75201", county: "Dallas County" },
  { street: "1100 Congress Ave", city: "Austin", state: "Texas", stateAbbr: "TX", zipCode: "78701", county: "Travis County" },

  // Utah
  { street: "451 S State St", city: "Salt Lake City", state: "Utah", stateAbbr: "UT", zipCode: "84111", county: "Salt Lake County" },
  { street: "350 N Redwood Rd", city: "Salt Lake City", state: "Utah", stateAbbr: "UT", zipCode: "84116", county: "Salt Lake County" },
  { street: "3600 S Constitution Blvd", city: "West Valley City", state: "Utah", stateAbbr: "UT", zipCode: "84119", county: "Salt Lake County" },
  { street: "351 W Center St", city: "Provo", state: "Utah", stateAbbr: "UT", zipCode: "84601", county: "Utah County" },
  { street: "8000 S Redwood Rd", city: "West Jordan", state: "Utah", stateAbbr: "UT", zipCode: "84088", county: "Salt Lake County" },
  { street: "2466 Washington Blvd", city: "Ogden", state: "Utah", stateAbbr: "UT", zipCode: "84401", county: "Weber County" },
  { street: "175 E 200 S", city: "Salt Lake City", state: "Utah", stateAbbr: "UT", zipCode: "84111", county: "Salt Lake County" },
  { street: "10 N Main St", city: "St. George", state: "Utah", stateAbbr: "UT", zipCode: "84770", county: "Washington County" },

  // Vermont
  { street: "149 Church St", city: "Burlington", state: "Vermont", stateAbbr: "VT", zipCode: "05401", county: "Chittenden County" },
  { street: "180 Market St", city: "South Burlington", state: "Vermont", stateAbbr: "VT", zipCode: "05403", county: "Chittenden County" },
  { street: "1 Scale Ave", city: "Rutland", state: "Vermont", stateAbbr: "VT", zipCode: "05701", county: "Rutland County" },
  { street: "6 N Main St", city: "Barre", state: "Vermont", stateAbbr: "VT", zipCode: "05641", county: "Washington County" },
  { street: "115 State St", city: "Montpelier", state: "Vermont", stateAbbr: "VT", zipCode: "05633", county: "Washington County" },
  { street: "39 Main St", city: "Montpelier", state: "Vermont", stateAbbr: "VT", zipCode: "05602", county: "Washington County" },
  { street: "75 Main St", city: "St. Johnsbury", state: "Vermont", stateAbbr: "VT", zipCode: "05819", county: "Caledonia County" },
  { street: "1 Mill St", city: "Burlington", state: "Vermont", stateAbbr: "VT", zipCode: "05401", county: "Chittenden County" },

  // Virginia
  { street: "2401 Courthouse Dr", city: "Virginia Beach", state: "Virginia", stateAbbr: "VA", zipCode: "23456", county: "Virginia Beach City" },
  { street: "810 Union St", city: "Norfolk", state: "Virginia", stateAbbr: "VA", zipCode: "23510", county: "Norfolk City" },
  { street: "900 E Main St", city: "Richmond", state: "Virginia", stateAbbr: "VA", zipCode: "23219", county: "Richmond City" },
  { street: "301 King St", city: "Alexandria", state: "Virginia", stateAbbr: "VA", zipCode: "22314", county: "Alexandria City" },
  { street: "215 Church Ave SW", city: "Roanoke", state: "Virginia", stateAbbr: "VA", zipCode: "24011", county: "Roanoke City" },
  { street: "1000 Bank St", city: "Richmond", state: "Virginia", stateAbbr: "VA", zipCode: "23219", county: "Richmond City" },
  { street: "100 E Main St", city: "Charlottesville", state: "Virginia", stateAbbr: "VA", zipCode: "22902", county: "Charlottesville City" },
  { street: "610 E Market St", city: "Charlottesville", state: "Virginia", stateAbbr: "VA", zipCode: "22902", county: "Charlottesville City" },

  // Washington
  { street: "600 4th Ave", city: "Seattle", state: "Washington", stateAbbr: "WA", zipCode: "98104", county: "King County" },
  { street: "808 W Spokane Falls Blvd", city: "Spokane", state: "Washington", stateAbbr: "WA", zipCode: "99201", county: "Spokane County" },
  { street: "747 Market St", city: "Tacoma", state: "Washington", stateAbbr: "WA", zipCode: "98402", county: "Pierce County" },
  { street: "210 E 13th St", city: "Vancouver", state: "Washington", stateAbbr: "WA", zipCode: "98660", county: "Clark County" },
  { street: "450 110th Ave NE", city: "Bellevue", state: "Washington", stateAbbr: "WA", zipCode: "98004", county: "King County" },
  { street: "220 4th Ave S", city: "Kent", state: "Washington", stateAbbr: "WA", zipCode: "98032", county: "King County" },
  { street: "2930 Wetmore Ave", city: "Everett", state: "Washington", stateAbbr: "WA", zipCode: "98201", county: "Snohomish County" },
  { street: "1055 S Grady Way", city: "Renton", state: "Washington", stateAbbr: "WA", zipCode: "98057", county: "King County" },

  // West Virginia
  { street: "501 Virginia St E", city: "Charleston", state: "West Virginia", stateAbbr: "WV", zipCode: "25301", county: "Kanawha County" },
  { street: "800 5th Ave", city: "Huntington", state: "West Virginia", stateAbbr: "WV", zipCode: "25701", county: "Cabell County" },
  { street: "389 Spruce St", city: "Morgantown", state: "West Virginia", stateAbbr: "WV", zipCode: "26505", county: "Monongalia County" },
  { street: "1 Government Square", city: "Parkersburg", state: "West Virginia", stateAbbr: "WV", zipCode: "26101", county: "Wood County" },
  { street: "1500 Chapline St", city: "Wheeling", state: "West Virginia", stateAbbr: "WV", zipCode: "26003", county: "Ohio County" },
  { street: "1900 Kanawha Blvd E", city: "Charleston", state: "West Virginia", stateAbbr: "WV", zipCode: "25305", county: "Kanawha County" },
  { street: "300 Foxcroft Ave", city: "Martinsburg", state: "West Virginia", stateAbbr: "WV", zipCode: "25401", county: "Berkeley County" },
  { street: "340 W Main St", city: "Clarksburg", state: "West Virginia", stateAbbr: "WV", zipCode: "26301", county: "Harrison County" },

  // Wisconsin
  { street: "200 E Wells St", city: "Milwaukee", state: "Wisconsin", stateAbbr: "WI", zipCode: "53202", county: "Milwaukee County" },
  { street: "210 Martin Luther King Jr Blvd", city: "Madison", state: "Wisconsin", stateAbbr: "WI", zipCode: "53703", county: "Dane County" },
  { street: "100 N Jefferson St", city: "Green Bay", state: "Wisconsin", stateAbbr: "WI", zipCode: "54301", county: "Brown County" },
  { street: "625 52nd St", city: "Kenosha", state: "Wisconsin", stateAbbr: "WI", zipCode: "53140", county: "Kenosha County" },
  { street: "730 Washington Ave", city: "Racine", state: "Wisconsin", stateAbbr: "WI", zipCode: "53403", county: "Racine County" },
  { street: "100 N Appleton St", city: "Appleton", state: "Wisconsin", stateAbbr: "WI", zipCode: "54911", county: "Outagamie County" },
  { street: "201 Delafield St", city: "Waukesha", state: "Wisconsin", stateAbbr: "WI", zipCode: "53188", county: "Waukesha County" },
  { street: "215 Church Ave", city: "Oshkosh", state: "Wisconsin", stateAbbr: "WI", zipCode: "54901", county: "Winnebago County" },

  // Wyoming
  { street: "2101 O'Neil Ave", city: "Cheyenne", state: "Wyoming", stateAbbr: "WY", zipCode: "82001", county: "Laramie County" },
  { street: "200 N David St", city: "Casper", state: "Wyoming", stateAbbr: "WY", zipCode: "82601", county: "Natrona County" },
  { street: "406 Ivinson Ave", city: "Laramie", state: "Wyoming", stateAbbr: "WY", zipCode: "82070", county: "Albany County" },
  { street: "201 W Lakeway Rd", city: "Gillette", state: "Wyoming", stateAbbr: "WY", zipCode: "82718", county: "Campbell County" },
  { street: "212 D St", city: "Rock Springs", state: "Wyoming", stateAbbr: "WY", zipCode: "82901", county: "Sweetwater County" },
  { street: "30 N Gould St", city: "Sheridan", state: "Wyoming", stateAbbr: "WY", zipCode: "82801", county: "Sheridan County" },
  { street: "200 E 24th St", city: "Cheyenne", state: "Wyoming", stateAbbr: "WY", zipCode: "82001", county: "Laramie County" },
  { street: "150 E B St", city: "Casper", state: "Wyoming", stateAbbr: "WY", zipCode: "82601", county: "Natrona County" },
]
