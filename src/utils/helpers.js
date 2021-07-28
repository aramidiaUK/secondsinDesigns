import { addMonths, addYears } from 'date-fns';
import { sports } from '../data/sportsOptions';


export const addDecimals = num => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const dateOptions = { year: "numeric", month: "long", day: "numeric" };

export const getYears = startYear => {
  let currentYear = new Date().getFullYear(),
    years = [];
  startYear = startYear || 1960;
  while (startYear <= currentYear) {
    years.push(startYear++);
  }
  return years;
};

export const months = [
  "Month",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const uploadClubImages = async (axios, blob, mainFile, setImagePath, loggedInUser, clubId, type) => {
  
  let file = new File([blob], mainFile.name, {
    type: mainFile.type,
    lastModified : mainFile.lastModified,
    lastModifiedDate: mainFile.lastModifiedDate,
   })
  const formData = new FormData();
  formData.append('image', file);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${loggedInUser.token}`,
          Clubsite: clubId ? clubId : 'initial',
        }
      } 

      const { data } = await axios.post(`/api/upload/club/${type}`, formData, config);
      
      setImagePath(data);

      return { status: 'Ok', data: data };

    } catch (error) {

      return { status: 'error', message: error };
    }
}

export const uploadMultipleFile = async (axios, files, loggedInUser, clubId, imageType) => {

  const formData = new FormData();
  for(const file of files) {
    formData.append('galleryImages', file);
  }

  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${loggedInUser.token}`,
        Clubsite: clubId,
      }
    } 

    const { data } = await axios.post(`/api/upload/galleryImages/new/${imageType}`, formData, config);
    
    return { status: 'Ok', data: data };

  } catch (error) {

    return { status: 'error', message: error };
  }
}

export const deleteImage = async (axios, imagePath, loggedInUser) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${loggedInUser.token}`,
      }
    }

    const { data } = await axios.delete('/api/upload', {image: imagePath}, config);

    if(data) {
      return { status: 'Ok', message: 'previous image deleted' };
    }
    
  } catch (error) {
    return { status: 'error', message: error };
  }
} 


export const sortPlayers = (clubType, players) => {
  const lineupOrder = [];

  sports[clubType].position.forEach((pos) => {
    const orderedLineup = players && players?.filter((item) => item.position.value === pos.value);
    lineupOrder.push(...orderedLineup);
  })

  return lineupOrder;
}

export const returnSubString = (text, from, to) => {
  return text.length > to ? text.substr(from, to)+'...' : text
}

export const getCurrentSeasonYear = () => {
  const today = new Date();
  const prevYear = addMonths(today, -9);

  if(prevYear.getFullYear() < today.getFullYear()) {
    return {startYear: prevYear.getFullYear(), endYear: today.getFullYear()}
  } else {
    return { startYear: today.getFullYear(), endYear: today.getFullYear() + 1}
  }
}

export const getSeasonYear = (customStartYear) => {
  let today = new Date();
  
  let diff =  today.getFullYear() - customStartYear;
  let year = addYears(today, -diff);
  let prevYear = addMonths(year, -9);



  
  if(prevYear.getFullYear() < year.getFullYear()) {
    return {startYear: {name: prevYear.getFullYear(), value: prevYear.getFullYear()}, endYear: year.getFullYear() + 1}
  } else {
    return { startYear: {name: year.getFullYear(), value: year.getFullYear()}, endYear: year.getFullYear() + 1}
  }
}

export const allowedPriceIds = (priceId) => {
    const allowedSubscriptions =  ['price_1IIdzpEs66whuxnoVmzIUkFf', 'price_1IIdyHEs66whuxnoUZxxjoop', 'price_1IIdxEEs66whuxnoifkMxvNQ'];
    return allowedSubscriptions.indexOf(priceId) > -1
}

export const setLoadingState = (components, updateState) => {
  const outcomes  = [false, null, undefined];
  let updateFlag = false; 
  components.forEach(async (comp) => {
    if(outcomes.indexOf(comp) <= -1) {
      updateFlag = true;
    } 
  })

  if(!updateFlag) {
    setTimeout(() => {
      updateState(updateFlag)
    }, 1000);
  }
}


export const imageError = (e, altImage) => {
  e.currentTarget.src = (altImage || window.$fallbackLogo)
}

export const returnSportTypeIcon = (sportType, football, rugby, basketball, americanFootball, defaultIcon) => {
  return sportType === 'football' ? football : sportType === 'affootball' ? americanFootball : sportType === 'rugby' ? rugby : sportType === basketball ?  'basketball' :  defaultIcon
}

export const setStylesVars = async() => {
  
  const doc = document.querySelector(":root");
  doc.style.setProperty("--ClubPrimaryColor", '#c70101');
  doc.style.setProperty("--ClubNavLinksFontColor", 'white');
  doc.style.setProperty("--ClubFooterColor", '#000');
  doc.style.setProperty("--ClubBackgroundImage", 'url(/assets/images/manu__logo.png)')
  doc.style.setProperty("--ClubFooterLinksColor", '#fff')
  doc.style.setProperty("--ClubCardRadius", '3px')
  doc.style.setProperty("--ClubButtonRadius", '3px')
  doc.style.setProperty("--ClubTransitionSpeed", '2s')


  // --ClubPrimaryColor: black;
  // --ClubSecondaryColor: grey;
  // --ClubAltColor: #000;
  // --ClubFooterColor: #000;
  // --ClubFooterLinksColor: #fff;
  // --ClubNavLinksFontColor: #fff;
  // --ClubSecondaryFontColor: #000;
  // --ClubTagsBgColor: var(--ClubPrimaryColor);
  // --ClubTagsFontColor: var(--ClubNavLinksFontColor);
  // --ClubCardRadius: 5px;
  // --ClubButtonRadius: 5px;
  // --ClubImageZoom: scale(1.5);
  // --ClubTransitionSpeed: 0.3s;
}



