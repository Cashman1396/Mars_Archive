const BASE_URL = 'https://api.rawg.io/api/';

//Getting the Month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};

//Get Current Day
const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
};


//Retrieves the entire date
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay =  getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Games
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

//export to the URL
export const popularGamesURL = () => `${BASE_URL}${popularGames}`;
export const upcomingGamesURL = () => `${BASE_URL}${upcomingGames}`;
export const newGamesURL = () => `${BASE_URL}${newGames}`;



//Game Details for Screenshot, Store, and resulted search
export const gameDetailsURL = (game_id) => `${BASE_URL}games/${game_id}`;
export const gameScreenshotURL = (game_id) => `${BASE_URL}games/${game_id}/screenshots`;
export const gameStoresURL = (game_id) => `${BASE_URL}games/${game_id}/stores`;
export const searchGameURL = (game_name) => `${BASE_URL}games?search=${game_name}&page_size=12`;
