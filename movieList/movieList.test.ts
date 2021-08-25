import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

describe("Movie list tests", () => {
    test("Add movie", async () => {
    let inputField = await driver.findElement(By.xpath('//form/input'))
    
    await inputField.sendKeys('Space Jam 2\n')
    await driver.sleep(2000)
    })

    test("Cross off movie", async () => {
        let movieTitle = await driver.findElement(By.xpath('(//li/span)[1]'))

        await movieTitle.click()
        await driver.sleep(2000)

    })

    test("Delete movie", async () => {
        let deleteButton = await driver.findElement(By.xpath('(//li/button)[1]'))

        await deleteButton.click()
        await driver.sleep(2000)
    })
})