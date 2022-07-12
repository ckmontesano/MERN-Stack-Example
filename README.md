# MERN-Stack-Example
This is a working example of a MERN stack (MongoDB, ExpressJS, ReactJS, and NodeJS). Please note that it assumes that you have a MongoDB local environment setup with a database called **PeopleDirectory** with a collection named **users**.

The **users** collection should contain only records matching the following schema:
```
{
  name: String,
  email_address: String
}
```

### Modify It
In order to make changes to the frontend, you'll need to ``npm run build`` and move the new build folder to the ``backend`` folder.

### Disclaimer
The code contained in this repository comes with absolutely no warranty and is only public to provide a working MERN example. No permission is granted to use this code in any commercial format.
