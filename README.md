# Web-NSA-Assignment-14
This repository contains the websites used by NSA Assignment for group 14.

# Setup
You may setup git clone in directory `/var/www/` and add suitable configuration files for your web server in order for it to work. 

# Apache2 Setup Tutorial (for my teammates <3)
## Prerequisites
This project requires Apache2 and Git. If Apache2 and Git are not installed on the computer, you can install them by running these commands:
```
sudo apt install apache2
sudo apt install Git
```

## Setting up Git
If you aren't sure what is Git, for the love of God please google it and take 10 minutes learn it. It will make your project version control so much easier.

Navigate to `/var/www/` 

_Note: the site directories needs to be owned by the user and have proper permissions  (you can change this with `chown` and `chmod` respectfully) so that Apache can access them._

In `/var/www/` directory, use this command to clone the repository.
```
git clone https://github.com/AlphaTheWoof/Web-NSA-Assignment-14/
```
This will create a folder with the repository name. 

## Commit and Push changes
If you haven't add the URL to the remote repository, use this command:
```
git remote add origin https://github.com/AlphaTheWoof/Web-NSA-Assignment-14/
```
You can stage the changes using `git add`, and commit the changes using `git commit`. After committing the changes locally, you can push the changes to the remote repository.

If this is your first time pushing changes, run this command:
```
git push --set-upstream origin <branch_name>
```
In the username field, enter your GitHub username. In the password field, enter the given token .

Otherwise,
```
git push origin <branch_name>
``` 
The main branch is named `master`. Refer to branches page for more information

## Setting up Apache2 configuration files
Navigate to `/etc/apache2/sites-available/` and create two files for both websites:
```
touch site1.nsagroup14.com.conf site2.nsagroup14.com.conf
```
In a text editor (such as nano), add this into the configuration files:
```
<VirtualHost *:80>
    ServerName site1.nsagroup14.com
    DocumentRoot <path-to-site-folder>
    ErrorLog ${APACHE_LOG_DIR}/site1.error.log
    CustomLog ${APACHE_LOG_DIR}/site1.access.log combined
</VirtualHost>
```
Remember to replace site1 with site2 for the other site. Once finished, enable the virtual hosts by creating symbolic links from the sites-available directory to the sites-enabled directory. Run the following commands to create symbolic links in the sites-enabled directory.
```
sudo a2ensite site1.nsagroup14.com.conf
sudo a2ensite site2.nsagroup14.com.conf
```
Finally, restart Apache to apply changes:
```
sudo service apache2 restart
```
_Note: you may not be able to access both websites. You will have to set up DNS entires for both sites manually to point the IP address to the Linux machine._
