package co.id.lionsair.resource;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import co.id.lionsair.object.HomePageRepository;
import co.id.lionsair.stepdefinition.Hook;

public class FrequentlyUsedMethod {

public void getURL(String URL) {
	Hook.driver.get(URL);
	}	

public void sendKeys(WebElement element,String data) {
	element.sendKeys(data);
}

public void methodClick(WebElement element) {
	element.click();
}

public void selectCityFromData(String FromCity) {
	HomePageRepository home=new HomePageRepository();
	List<WebElement> CityList = Hook.driver.findElements(By.xpath("(//div[@class='list-container'])[1]//ul//li"));
	for (int i = 0; i < CityList.size(); i++) {
		
		if(CityList.get(i).getText().contains(FromCity)) {
			CityList.get(i).sendKeys(Keys.ENTER);
		}
	}
	
}

}
