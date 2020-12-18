<h3 align="center">
  GCP functions starter
</h3>

<p align="center">
  Starter for Google cloud functions
</p>

## Example

[In functions folder](https://github.com/NiFos/gcp-functions-starter/tree/master/functions/name)

## How to start develop new functions?

1. Clone repo.

2. Create new folder in **functions** with name of new function.

3. ``` cd functions/NAME_OF_NEW_FUNCTION```

4. ```yarn init```

5. Now you must add typescript as dev dependency

   ``` yarn add --dev typescript```

   Create **tsconfig.json** with your settings 

6. In **package.json** add next:

   ```
   "config": {
       "name": "Name_of_function", // Name of function, will be used how as route: https://yourname.cloudfunctions.net/Name_of_function
       "mem": 256, // RAM
       "regions": [
         "europe-west1"
       ], // Regions to deploy
       "entryPoint": "name" // Name of exported function from index.ts
     },
   ```

   

## How to set env?

On **local machine** you can create .env file and restart the server.

If you already deployed functions, you can setup environment variables in **gcp console**

## How  to start on local machine?

```
yarn dev
```

## How  to deploy?

```
yarn deploy
```
