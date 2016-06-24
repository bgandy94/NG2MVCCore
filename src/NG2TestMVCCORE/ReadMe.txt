Start of trek to get Angular2 working with ASP.NET Core RC2

First things first, the project is by default configured to not show files such as:
package.json
bower.json

IF YOU WANT TO see these files inside the project, simply follow the steps below:
-Right-click the project and click 'Unload Project' >
-Right click the unloaded project and click the 'Edit <Project Name>.xproj file.
-Inside that either search for 'package.json' or just look under the ItemGroup node and find
the two <<DnxInvisibleContent/> that have package.json and bower.json in the Include attribute

**********************ISSUES***************************

I was getting an error that said: 