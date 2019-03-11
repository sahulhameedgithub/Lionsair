package co.id.lionsair.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= "C:\\Users\\Admin\\oxygen\\eclipse-workspace\\LionsAir\\src\\test\\resources\\Feature\\HomePageLion.feature",
glue="co.id.lionsair.stepdefinition",
plugin= {"html:target"})
public class TestRunner {

}
