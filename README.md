Initial ReadMe
## 🧸 How to Add a New Message to the Vault

Follow these 4 steps to draft, encrypt, and publish a new message.

### Step 1: Draft the Message
Create a new file inside the `messages/unencrypted/` folder. 
* Name format: `[filename]-unencrypted.txt`

### Step 2: Encrypt the File
Open your terminal, make sure you are in the project's root directory, and run the automated script using just the base filename:

```bash
node encrypt.js anniversary
```

### Step 3: Add to the Index
Open messages/list.json and add your new message to the list so the website knows to display it.

### Step 4: Push to GitHub
```
git add messages/encrypted/anniversary.txt
git add messages/list.json
git commit -m "feat: added anniversary message"
git push origin main
```