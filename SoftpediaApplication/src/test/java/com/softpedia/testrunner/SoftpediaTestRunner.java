package com.softpedia.testrunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	
@RunWith(Cucumber.class)

@CucumberOptions
(
	features = "C:\\Users\\SANTHOSH KUMAR\\git\\Softpedia_Application\\SoftpediaApplication\\src\\main\\resources\\feature\\Testscenario.feature",
	plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport","com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},
	tags = {"@tc_01_register, @tc_02_login, @tc_03_phonesearch,	@tc_04_prizeclaim, @tc_05_selectgame"},
	glue = {"com.softpedia.stepdefinition"},
	monochrome = true
) 
public class SoftpediaTestRunner 
{
	@AfterClass
	  public static void extendReport() 
	{ 
		Reporter.loadXMLConfig("D:\\selenium projects\\Softpedia_Application-master\\src\\test\\resources\\extent-config.xml");
	    Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
	    Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
	    Reporter.setSystemInfo("Machine", "Windows 10" + "64 Bit");
	    Reporter.setSystemInfo("Selenium", "3.141.59");
	    Reporter.setSystemInfo("Maven", "4.0.0");
	    Reporter.setSystemInfo("Java Version", "1.8.0_131");
	}
}

