var jsonData;
const loginScript = {    
    'method': 'POST',
    'url': 'https://<yourAPIendpoint>/<dummy>/<dummy>',
    'body': {
            'mode': 'formdata',
            'formdata': [
                {'key':'grant_type', 'value':'password'},
                {'key':'client_id', 'value':'dummy_client'},
                {'key':'password', 'value':'yourpassword'},
                {'key':'passcode', 'value':'123456'},
                {'key':'username', 'value':'dummy@test'},
                {'key':'managecode', 'value':'dummycode'}
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
