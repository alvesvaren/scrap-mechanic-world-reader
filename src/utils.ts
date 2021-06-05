interface JSONObject {
    [key: string]: any;
}

function getPreferences(): JSONObject {
    return JSON.parse(localStorage.getItem('preferences') || '{}');
}

function setPreferences(preferences: JSONObject) {
    localStorage.setItem('preferences', JSON.stringify(preferences));
}

function setPreference(key: string, value: any) {
    let preferences = getPreferences();
    preferences[key] = value;
    setPreferences(preferences);
}

function getPreference(key: string): any {
    return getPreferences()[key];
}

export { getPreferences, getPreference, setPreferences, setPreference };
