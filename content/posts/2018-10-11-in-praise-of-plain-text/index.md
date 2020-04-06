---
title: In Praise of Plain Text
author: Derek Au
date: 2018-10-11
hero: 
excerpt: 
---

Note: This is my first post made using the new [Wordpress Gutenberg editor](https://wordpress.org/gutenberg/).

I've spent the past day trying to export my mother's Outlook email archives to a format that I can import into a new Gmail account I've set up for her.  It's been a surprisingly frustrating ordeal given that her outdated Outlook 2007 installation is somehow slightly corrupted and Thunderbird is getting stuck importing the PST files.  The only option that's worked is propriety software that will cost me $30 for a license that I'm too stubborn to buy.

I can't but help think of the Clayart email discussion list, one of the oldest and perhaps most popular lists used by ceramicists throughout the years.  The list archives have been converted to HTML web pages and posted on a number of websites and platforms throughout the years, most notably [http://potters.org](http://potters.org)  These archives proved extremely valuable to me during my time in Jingdezhen when I was researching ceramics techniques and recipes.  The fact that the full Clayart archives are available in human-readable text formats like mbox and HTML means that they are _hardy_\- much less fragile than proprietary binary formats like Outlook PST.

It just happens that I've also been thinking of the best data format for exporting Glazy's ceramic glaze recipes.  Throughout the years there have been a number of glaze calculation programs that have come and gone.  Some of these programs used binary file formats that can no longer be read, while luckily others used plain-text file formats.  The best example is probably GlazeChem, which used a simple plain-text format that looked like this:

```
name   = Pebble Sculpture Glaze
index  = 
date   = 12/16/2012
source = 
type   = 
range  = 03
firetype     = Oxidation
color        = White
vistexture   = Mottled
quality      = Lichen
transparency = Translucent
xtals        = 
bubbles      = 
flow         = 
durability   = 
flaws     = 
tested    = 
imagefile = 
notefile  =  
limform   =  
by_vol    = n
batchsize = 0
component = Magnesium carbonate
amount    = 35.7
component = Lithium carbonate
amount    = 7.1
component = Borax
amount    = 35.7
component = Gerstley borate
amount    = 21.5
var  = |+ copper carb 2.9 + cobalt carb 0.3 - mottled semi-gloss blue-green
var  = |+ rutile 6 - waxy mottled yellow-green when over black (iron) slip
var  = |+rio 3.2 = Mottled brown
var  = |+Zircopax 5.2 = Smoother mottled brown when over black (iron) slip
var  = |+ 1.5 Chrome = over black (iron) slip mottled brown and green
note = |Tested by Rhonda Chan.
```

Although the GlazeChem software is no longer maintained, luckily a number of ceramicists exported their recipes and posted them online.  The most notable collection of GlazeChem archives is on Linda Arbuckle's website:  [http://lindaarbuckle.com/arbuckle\_handouts.html](http://lindaarbuckle.com/arbuckle_handouts.html)  When seeding the original Glazy database, it was trivial to write a script to import the GlazeChem archives into the Glazy Mysql database.  More importantly, anyone can just download the articles and read the original plaintext recipes.

Another notable file format for glaze recipes is from Digitalfire and uses XML:

```
<?xml version="1.0"?>
<recipes version="1.0" encoding="UTF-8">
<recipe name="Cone 6 Ultraclear Glaze for Porcelains" keywords="Substitute for low expansion cone 6 G1215U, this sources MgO from talc instead of a frit" id="106" date="2015-10-30" codenum="G1216M">
<recipelines>
<recipeline material="Minspar 200" amount="8.600" unitabbr="kg" conversion="1.0000" added="0"/>
<recipeline material="Ferro Frit 3134" amount="23.200" unitabbr="kg" conversion="1.0000" added="0"/>
<recipeline material="Wollastonite" amount="15.200" unitabbr="kg" conversion="1.0000" added="0"/>
<recipeline material="EPK" amount="24.800" unitabbr="kg" conversion="1.0000" added="0"/>
<recipeline material="Talc" amount="4.300" unitabbr="kg" conversion="1.0000" added="0"/>
<recipeline material="Silica" amount="23.800" unitabbr="kg" conversion="1.0000" added="0"/>
<url url="https://www.digitalfire.com/4sight/recipes/cone_6_ultraclear_glaze_for_porcelains_106.html" descrip="Recipe page at digitalfire.com"/>
</recipelines>
<urls/>
</recipe>
</recipes>
```

As with the GlazeChem file format, Digitalfire's XML format is very easy to read either by humans or import scripts.

Glazy uses a JSON (JavaScript Object Notation) lightweight data-interchange format for communication between server and client. It's similar to the XML format used by Digitalfire, but drops the opening and closing tags and just uses names & values.

```
{
    "data": {
        "id": 3262,
        "parentId": null,
        "name": "Leach 4321 +1% Red Iron Oxide",
        "otherNames": null,
        "description": "The classic Leach clear plus iron oxide.",
        "isAnalysis": false,
        "isPrimitive": false,
        "isArchived": false,
        "materialStateId": 2,
        "materialStateName": "Production",
        "materialTypeId": 490,
        "baseTypeId": 460,
        "materialType": {
            "id": 490,
            "parentMaterialType": {
                "id": 460,
                "parentMaterialType": {
                    "id": 100
                }
            }
        },
        "fromOrtonConeId": 34,
        "fromOrtonConeName": "10",
        "toOrtonConeId": 34,
        "toOrtonConeName": "10",
        "surfaceTypeId": 8,
        "surfaceTypeName": "Glossy",
        "transparencyTypeId": 4,
        "transparencyTypeName": "Transparent",
        "colorName": "transparent",
        "hexColor": "ffffff",
        "thumbnailId": 518,
        "ratingTotal": 0,
        "ratingNumber": 0,
        "ratingAverage": "0.00",
        "isPrivate": false,
        "createdByUserId": 7,
        "createdAt": "2015-10-14T13:25:44",
        "updatedAt": "2015-10-14T14:44:52",
        "materialComponentTotalAmount": 101,
        "atmospheres": [
            {
                "id": 3
            }
        ],
        "materialComponents": [
            {
                "percentageAmount": "40.0000",
                "isAdditional": false,
                "material": {
                    "id": 15892,
                    "name": "Potash Feldspar (Zheng Yi SK7)",
                    "isAnalysis": false,
                    "isPrimitive": true,
                    "isPrivate": true,
                    "materialStateId": 2,
                    "analysis": {
                        "percentageAnalysis": {
                            "SiO2": "70.1200",
                            "Al2O3": "16.5200",
                            "Na2O": "2.9800",
                            "K2O": "9.5000",
                            "MgO": "0.0200",
                            "CaO": "0.2300",
                            "TiO2": "0.0100",
                            "Fe2O3": "0.0500",
                            "loi": "0.2600"
                        },
                        "umfAnalysis": {
                            "SiO2": "7.6011",
                            "Al2O3": "1.0553",
                            "Na2O": "0.3132",
                            "K2O": "0.6569",
                            "MgO": "0.0032",
                            "CaO": "0.0267",
                            "TiO2": "0.0008",
                            "Fe2O3": "0.0020",
                            "SiO2Al2O3Ratio": "7.2028",
                            "R2OTotal": "0.9701",
                            "ROTotal": "0.0299"
                        },
                        "molPercentageAnalysis": {
                            "SiO2": "78.6924",
                            "Al2O3": "10.9253",
                            "Na2O": "3.2421",
                            "K2O": "6.8006",
                            "MgO": "0.0335",
                            "CaO": "0.2766",
                            "TiO2": "0.0084",
                            "Fe2O3": "0.0211"
                        },
                        "formulaAnalysis": {
                            "SiO2": "1.1670",
                            "Al2O3": "0.1620",
                            "Na2O": "0.0481",
                            "K2O": "0.1009",
                            "MgO": "0.0005",
                            "CaO": "0.0041",
                            "TiO2": "0.0001",
                            "Fe2O3": "0.0003"
                        },
                        "weight": "0.0000",
                        "oxideWeight": "647.6175"
                    },
                    "thumbnail": {
                        "id": 4991,
                        "materialId": 15892,
                        "title": "",
                        "description": "",
                        "dominantRgbR": 222,
                        "dominantRgbG": 212,
                        "dominantRgbB": 202,
                        "dominantHexColor": "ded4ca",
                        "secondaryRgbR": 153,
                        "secondaryRgbG": 129,
                        "secondaryRgbB": 109,
                        "secondaryHexColor": "99816d",
                        "filename": "15892.5a6bafa381899.jpg",
                        "isPrivate": false,
                        "createdByUserId": 7,
                        "createdAt": "2018-01-26T22:45:57",
                        "updatedAt": "2018-01-26T22:45:57"
                    }
                }
            },
........ etc. ......
        }

    }

}
```

But I don't think JSON is the best way for storing and archiving recipes.   Most importantly, although it's human-readable, the Glazy JSON API was designed to allow communication between _computer software systems_, not humans.

Below is a first draft of a data file that I designed to be first and foremost read by humans.  It's very clear to read, and yet also simple for software to import.

Steps to import:

- If line equals "RECIPE:", end current recipe or material and begin importing a new recipe or material.
- **Indentation and whitespace doesn't matter (except for spaces between words). ** As plaintext recipes are copied & pasted or converted to other text formats over and over again, it's likely that whitespace will be modified.  For example, loss of indentation.  The data should still be readable even if this occurs.

```
RECIPE:
Name: Leach 4321 +1% Red Iron Oxide
Other Names:
Orton Cone: 9-10
Type: Glaze > Iron > Celadon
State: Production
Surface: Glossy
Transparency: Transluscent
Description: The classic Leach clear plus iron oxide.
INGREDIENTS:
    40    Potash Feldspar (ID: 15892)
    30    Silica (ID: 15400)
    20    Whiting (ID: 15457)
    10    Kaolin (ID: 15288)
    +1    Red iron oxide (ID: 15387)
METADATA:
    ID: 3262
    Parent ID: 
    Analysis: False
    Primitive: False
    Archived: False
    Created By: Derek Au
    Created By User ID: 7
    Created At: 2015-10-14
    Updated At: 2015-10-14
PERCENTAGE ANALYSIS:
    SiO2: 62.15
    Al2O3: 10.52
    Na2O: 1.18
    K2O: 3.76
    MgO: 0.00
    CaO: 11.20
    TiO2: 0.00
    Fe2O3: 0.96
    LOI: 10.08
UMF ANALYSIS:
    R2O/RO:
        Na2O: 0.07     
        K2O: 0.15
        MgO: 0.00
        CaO: 0.77
    R2O3:
        Al2O3: 0.40
    RO2:
        SiO2: 4.00
    OTHER:
        TiO2: 0.00
        Fe2O3: 0.02
    SiO2:Al2O3 Ratio: 10.02
    R2O:RO Ratio: 0.23:0.77
```

However, there are issues with the above format that plain-text formats like CSV, JSON, XML and YAML already struggled with in the past.  For example, what if the recipe description contains delimiter fields such as "METADATA:"?  I already stated that whitespace shouldn't signify anything, and there's no other way defined to "escape" text data.
