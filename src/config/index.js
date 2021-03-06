const env = process.env.REACT_APP_ENV;

let config = {
    baseURL: "http://localhost/"
}

switch(env.toUpperCase()){
    case "STAGE":
        config.baseURL = "https://stage.skillsunion.com"
        break;
    case "DEV":{
        config.baseURL = "https://skillsunion.com"
        break;
    }
}

export default config;