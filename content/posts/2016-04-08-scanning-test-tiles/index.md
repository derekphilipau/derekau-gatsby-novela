---
title: Scanning Test Tiles
author: Derek Au
date: 2016-04-08
hero: 
excerpt: 
---

Having purchased a scanner for digitizing my family’s old photos, I had the brilliant idea to also scan glaze test tiles.  I thought I was a genius until [Matthew Katz](http://www.alfredceramics.com/katz.html) mentioned that he had been scanning tiles for the past ten years.

Matthew noted that CCD scanners have a greater depth of field, which is great for three-dimensional objects like test tiles.  Because of his recommendation I purchased the Canon 9000F Mark II.

I’m not a scanner expert and have never calibrated a scanner before.  I already have an X-Rite ColorChecker Classic for photography, and this color card can be used with X-Rite’s i1Profiler (i1Publish) software to create a scanner profile.  Unfortunately, the software license seems to be very expensive.

I tried Argyll CMS ([http://www.argyllcms.com/](http://www.argyllcms.com/)) but results using the generated ICC profile were worse than the default output.

Here’s a scan of some test tiles.  I had to adjust the Exposure in Photoshop by about +1 stop.  Notice the reflections on some test tiles that were not flat.

![](./images/IMG_20160408_0002.jpg)

### Enable large image scans on Canon 9000F Mark II

The Canon software is really frustrating- by default it wouldn’t let me scan a file greater than a set limit (10208 x 14032 pixels, or larger than 100MB).  I finally found a solution hidden away in the software settings.

![](./images/dialogerror.png)
    
    By default, ScanGear won't let you scan images greater than a seemingly arbitrarily set limit.
    
![](./images/dialog1.png)
    
    1\. Open IJ Scan Utility and click Settings
    
![](./images/dialog2.png)
    
    2\. Select ScanGear and check Enable large image scans
    
![](./images/dialog3.png)
    
    3\. ScanGear will now scan files over 100MB. However, you must manually enter dpi greater than 1200, such as 2400, 4800, 9600.
    

### Comparison with DSLR

I have a relatively old and cheap Canon EOS Rebel T2i with a 18MP sensor.  In comparison with the Canon 9000F scans, the photos from my camera are smaller.  However, they seem to contain just as much if not more detail and better colors.  If needed I can adjust lighting conditions and camera settings to reduce reflections and adjust exposure.  On the other hand, the scan had some reflections that I could not eliminate.

It also takes less time for me to take photos than scan at 2400dpi.

Below are comparisons of the scan and the photos.  In particular, the dark glazes came out very poorly on the scanner.

![](./images/PF65Wh18DCH7S10RIO6.5c12.jpg)
    
    Tianmu glaze tile. Canon 9000f Mark II 2400dpi, adjust exposure +1.
    
![](./images/IMG_0716.jpg)
    
    Tianmu glaze tile. Natural light, 18MP EOS Rebel T2i photo
    
![](./images/PF4WA3DCH3c11.jpg)
    
    Ash glaze tile. Canon 9000f Mark II 2400dpi, adjust exposure +1.
    
![](./images/IMG_0704-1.jpg)
    
    Ash glaze tile. Natural light, 18MP EOS Rebel T2i photo
    
![](./images/PF4WA3DCH3c11_edit.jpg)
    
    Detail of Canon 9000F Mark II scan
    
![](./images/IMG_0704-2_edit.jpg)
    
    Detail of 18MP EOS Rebel T2i photo
    

### Conclusion

In conclusion, while the Canon 9000F is great for scanning old photos and documents, I still haven’t found a way to scan glaze tiles that beats results from my old DSLR.
