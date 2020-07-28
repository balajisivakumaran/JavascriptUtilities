var jsonData;
const loginScript = {    
    'method': 'POST',
    'url': 'https://<yourAPIendpoint>/connect/token',
    'body': {
            'mode': 'formdata',
            'formdata': [
                {'key':'grant_type', 'value':'password'},
                {'key':'client_id', 'value':'web_client'},
                {'key':'password', 'value':'yourpassword'},
                {'key':'passcode', 'value':'123'},
                {'key':'username', 'value':'api@test'},
                {'key':'managecode', 'value':'test'}
            ]
    }
};
pm.sendRequest(loginScript, (error, loginResponse) => {
    if (error) throw new Error(error);
    jsonData = loginResponse.json()
    console.log(jsonData);
    console.log(jsonData.access_token);
    pm.environment.set('accessToken', jsonData.access_token);
});
