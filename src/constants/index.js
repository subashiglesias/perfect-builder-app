const RouterPaths = {
    FORBIDDEN: '/forbidden',
    ROOT: '/',
    PROJECTS: '/projects',
    UNAUTHORIZED: '/unauthorized',
};

const LogTypes = {
    SAGA: 'saga',
    COMPONENT: 'component',
};

const Descriptions = {
    PROJECTS: "Click here to navigate to project section. You can add new or edit existing forms related to Projects",
    MATERIALS: "Click here to navigate to material section. You can add new or edit existing forms related to Materials",
    TRANSPORTATION: "Click here to navigate to transportation section.  You can add new or edit existing forms related to Transportation",
    VENDOR: "Click here to navigate to vendor section. You can add new or edit existing forms related to Vendor",
    CLIENT: "Click here to navigate to client section.  You can add new or edit existing forms related to Client",
}

const ContractList = [
    "Civil contract",
    "Plumbing contract",
    "Electrical contract",
    "Painting contract",
    "Carpentry contract",
    "Tiles contract"
]

const ItemTypeList = [
    "Civil",
    "Electrical",
    "Plumbing",
    "Painting",
    "Carpentry",
    "Tile",
    "Brick",
    "Sand",
    "Steel",
    "Wood",
    "Upvc window",
    "Water",
    "Bore",
    "Concrete",
    "Cement",
    "Waterproof",
    "Blue metal",
    "Grill",
    "Weathering",
    "Lift",
    "Motor",
    "Salary and allowance",
    "Rent",
    "Interest payment",
    "Petrol Expense",
    "Extra expense",
]

const ButtonTypes = {
    PRIMARY: 'primary',
    REVERSE: 'reverse',
    OUTLINE: 'outline',
    SECONDARY: 'secondary',
    COOPER_ORANGE: 'cooper-orange',
    OUTLINE_TERTIARY_REVERSE: 'outline-tertiary-reverse',
    TERTIARY: 'tertiary',
    // all: () => ['primary', 'reverse', 'outline', 'secondary', 'tertiary'],
};

export {
    LogTypes,
    ButtonTypes,
    RouterPaths,
    Descriptions,
    ContractList,
    ItemTypeList
};
