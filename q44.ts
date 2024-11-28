function StoreCarInfo(manufacturer: string, modelName: string, ...extraOption: { [key : string]: any } [] ):
object {

    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }

    return carInfo;
};

let answare = StoreCarInfo('Honda', 'Civic', {colour:'black'}, {features: ['Navigation', 'powerwindow']})

console.log(answare);