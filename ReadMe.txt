****************************************COMMENTS**********************************************

Start of trek to get Angular2 working with ASP.NET Core RC2

First things first, the project is by default configured to not show files such as:
package.json
bower.json

If you encounter any build errors relating to typescript or anything of that nature,
run the gulp tasks clean-libs, then run the task copy-all

IF YOU WANT TO see these files inside the project, simply follow the steps below:
-Right-click the project and click 'Unload Project' >
-Right click the unloaded project and click the 'Edit <Project Name>.xproj file.
-Inside that either search for 'package.json' or just look under the ItemGroup node and find
the two <<DnxInvisibleContent/> that have package.json and bower.json in the Include attribute

****************************************ISSUES************************************************
06-24-2016 - Had an issue when adding tsconfig.json file, gave a ton of TS errors, had to add
the extra excludes so that it was not looking in the wwwroot folder or the typings folder.






***************************************HELPFUL LINKS******************************************
http://stackoverflow.com/questions/20444748/cannot-push-branch-because-of-weird-changes-in-master
https://www.npmjs.com/package/del
http://blog.scottlogic.com/2015/12/24/creating-an-angular-2-build.html
https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js
https://angular.io
https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html
