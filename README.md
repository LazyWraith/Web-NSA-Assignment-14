# Web-NSA-Assignment-14
This repository contains the websites used by NSA Assignment for group 14.

# Setup
You may setup git clone in directory `/var/www/` and add suitable configuration files for your web server in order for it to work. For example, navigate to `/etc/apache2/sites-available/` and create two files for both websites:

```
touch site1.nsagroup14.com.conf site2.nsagroup14.com.conf
```

In a text editor (such as nano), add this into the configuration files:

```
<VirtualHost *:80>
    ServerName site1.group.com
    DocumentRoot /var/www/site1
    ErrorLog ${APACHE_LOG_DIR}/site1.error.log
    CustomLog ${APACHE_LOG_DIR}/site1.access.log combined
</VirtualHost>
```

Replace site1 with site2 for the other site. Then, Enable the virtual hosts by creating symbolic links from the sites-available directory to the sites-enabled directory. Run the following commands to create symbolic links in the sites-enabled directory.

```
sudo a2ensite site1.group.com.conf
sudo a2ensite site2.group.com.conf
```

Note that the `/var/www` directory needs to be owned by the user and have proper permission  (you can change this with `chown` and `chmod` respectfully) so that Apache can access them.
