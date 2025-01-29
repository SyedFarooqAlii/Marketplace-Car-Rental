Day 3 - API Integration Report: Morent

## *Overview*
Day 3 ka focus Morent project mein API integration per tha. Sanity CMS ka istemal karte hue "car" schema setup kiya gaya, aur frontend-backend interaction ko ensure kiya gaya. Yeh report API integration process, schema details, queries, aur validation rules ko document karti hai.

---

## *API Integration Process*

### *Data Source*
Morent project ka data Sanity CMS mein manage hota hai aur yahan se fetch kiya jata hai:
- *Car Schema*: Car ke naam, brand, price, fuel type, availability, aur images ko manage karta hai.

API endpoints ko token-based authentication ke zariye secure banaya gaya hai.

---

## *Schema Details*

### *Car Schema*
Yeh schema car data ko store aur manage karne ke liye tayar kiya gaya hai. Validation rules consistency ko ensure karti hain.  

```typescript
export default {
  name: 'car',
  type: 'document',
  title: 'Car',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Car Name',
      validation: (Rule: Rule) => Rule.required().min(3).max(50),
    },
    {
      name: 'brand',
      type: 'string',
      title: 'Brand',
      validation: (Rule: Rule) => Rule.required().min(2),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price per Day',
      description: 'Rental price per day',
      validation: (Rule: Rule) => Rule.required().min(0),
    },
    {
      name: 'fuelType',
      type: 'string',
      title: 'Fuel Type',
      description: 'Type of fuel used (Petrol, Diesel, Electric)',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
name: 'seats',
      type: 'number',
      title: 'Number of Seats',
      validation: (Rule: Rule) => Rule.required().min(1),
    },
    {
      name: 'available',
      type: 'boolean',
      title: 'Available',
      description: 'Car ki availability status',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Car Image',
      options: { hotspot: true },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Short description of the car',
    },
  ],
};


---

## **API Queries**

### **Fetch Car by ID & Fetch All Cars**
Ek specific car ki details ya sabhi available cars ko retrieve karne ke liye:  

typescript
export const carById = defineQuery(`
  *[_type == "car" && _id == $id] {
    name,
    brand,
    price,
    fuelType,
    seats,
    available,
    "image": image.asset->url,
    description,
    _id
  }
`);

export const allCars = defineQuery(`
  *[_type == "car"]{
    _id,
    name,
    brand,
    price,
    fuelType,
    seats,
    available,
    "image": image.asset->url,
    description
  }
`);
```

---

## *Conclusion*
Yeh API structure Morent project ke liye seamless data management aur retrieval ko ensure karta hai. Next steps mein API performance optimization aur authentication security par focus kiya jayega.