# WakaTime CORS proxy

[![Heroku App Status](https://img.shields.io/static/v1?label=deployed%20on&message=Heroku&color=blueviolet&style=for-the-badge&logo=heroku)](https://wakatime-cors-proxy.herokuapp.com)

**A proxy server for WakaTime API.**

While trying to access Wakatime API, I was getting errors that Access-Control-Allow-Origin header is not present on the response.

This proxy allows you to bypass those errors by querying this proxy's url. This acts as a middleman and adds appropiate headers.