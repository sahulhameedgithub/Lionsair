package co.id.lionsair.object;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import co.id.lionsair.stepdefinition.Hook;

public class HomePageRepository  {
	public HomePageRepository(){
		PageFactory.initElements(Hook.driver, this);
	}
	
	@FindBy(xpath="//input[@type='radio']")
	private WebElement radioFrom;
	
	@FindBy(xpath="//input[@id='rbReturn']")
	private WebElement radioReturn;
	
	public WebElement getRadioFrom() {
		return radioFrom;
	}

	public WebElement getRadioReturn() {
		return radioReturn;
	}

	public WebElement getFromCity() {
		return fromCity;
	}

	public WebElement getToCity() {
		return toCity;
	}

	public WebElement getPassDate() {
		return passDate;
	}

	public WebElement getPassengerCount() {
		return passengerCount;
	}

	public WebElement getFromCityEnter() {
		return fromCityEnter;
	}

	public WebElement getFromToEnter() {
		return fromToEnter;
	}

	public WebElement getAdultEnter() {
		return adultEnter;
	}

	public WebElement getSelect() {
		return select;
	}

	@FindBy(xpath="//input[@id='departCity']")
	private WebElement fromCity;
	
	@FindBy(xpath="//input[@id='arrivalCity']")
	private WebElement toCity;
	
	@FindBy(xpath="(//input[@placeholder='Depart Date'])[1]")
	private WebElement passDate;
	
	@FindBy(xpath="//input[@id='passengersCounter']")
	private WebElement passengerCount;
	
	@FindBy(xpath="(//input[@class='search form-control'])[1]")
	private WebElement fromCityEnter;
	
	@FindBy(xpath="(//input[@class='search form-control'])[2]")
	private WebElement fromToEnter;
	
	@FindBy(xpath="//select[@id='persons_0']")
	private WebElement adultEnter;
	
	@FindBy(xpath="(//input[@type='submit'])[1]")
	private WebElement select;

	@FindBy(xpath="(//div[@class='list-container'])[1]//ul//li")
    private WebElement city_List;

	public WebElement getCity_List() {
		return city_List;
	}	
}
