# Repository-GitHub-ZeppOS-Apps

Per creare App in ZeppOS è necessario adoperare i comandi di Zeus CLI dopo averne abilitato la lettura per la sessione corrente (poiché altrimenti questi script verrebbero bloccati):

- Terminale in Visual Studio Code nella directory della cartella in cui allocare il progetto
- Installare zues per la durata della sessione: npm i @zeppos/zeus-cli -g  
- Inserire il codice: Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

- Eseguire i comandi che seguono:

zeus create <project_name> -> per creare il progetto
zeus preview -> Per ottenere il QR Code dedicato alla visualizzazione dev dell'App sul dispositivo fisico
zeus dev -> Connect to the ZeppOS Simulator
zues build -> Create the real App Installer
 
