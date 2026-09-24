# Tokyo Night theme for itswakil.github.io

1. Unzip this into the root of your itswakil.github.io repo and let it overwrite files.
2. Get a free access key at https://web3forms.com (enter the address you want messages sent to).
3. On GitHub: repo Settings > Secrets and variables > Actions > Variables tab > New repository variable.
   Name: WEB3FORMS_KEY    Value: your access key
4. Commit and push. The deploy workflow builds the site with the key in place.

Until step 3 is done, the contact page says the form isn't connected yet and the send button is disabled.
