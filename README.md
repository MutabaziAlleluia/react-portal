# @mutabazia/react-portal
React Context-based Portal

This library provides a set of React components for managing portals. It includes **Portal**, **Portal.Context**, **Portal.Provider**, and **Portal.Placeholder**.

## Installation

You can install the library with npm:

```bash
npm install --save @mutabazia/react-portal
```

Or with yarn:

```bash
yarn add @mutabazia/react-portal
```

## Usage

First, wrap your app with the **Portal.Provider**.

```tsx
import Portal from '@mutabazia/react-portal';

function App() {
  return (
    <Portal.Provider>
      {/* your app code */}
    </Portal.Provider>
  );
}

export default App;
```

Next, you can create a **Portal.Placeholder** and a corresponding **Portal** anywhere within your app. The **Portal.Placeholder** component serves as a placeholder for where you want to insert the portal content. The **Portal** component is where you define the content to be rendered in the portal.

```tsx
import Portal from '@mutabazia/react-portal';

function Example() {
  return (
    <div>
      <Portal.Placeholder id="myPortal" />

      <Portal id="myPortal">
        <div>This will be rendered in the portal!</div>
      </Portal>
    </div>
  );
}

export default Example;
```

In the above example, the **div** within **Portal** will be rendered inside the **Portal.Placeholder** with the same **id** ("myPortal").

You can also customize how the portal content is rendered using the **renderItem** prop. This function takes the portal content as its argument and should return the customized content.

Here's an example that uses **renderItem** to wrap the portal content with a **ul** tag:

```tsx
import Portal from '@mutabazia/react-portal';

function ListPortalExample() {
  return (
    <div>
      <Portal.Placeholder id="listPortal" renderItem={(items) => <ul>{items}</ul>} />

      <Portal id="listPortal">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </Portal>
    </div>
  );
}

export default ListPortalExample;
```

In this example, the **Portal.Placeholder** component with the **id** of "listPortal" is using a **renderItem** function that wraps the portal content with a **ul** tag. The **Portal** with the same **id** provides the list items (**li** tags). This results in a rendered list where the li items from **Portal** are contained within a **ul** in the **Portal.Placeholder**.

## API

### Portal.Provider

This component creates the portal context. Wrap your entire app with this component.

### Portal.Placeholder

This component serves as a portal target. It takes an **id** prop which is used to identify the portal.

#### Props:

- **id**: A unique identifier for the portal.
- **renderItem** (optional): A function to customize how the portal content is rendered.

### Portal

This component is used to render content into a portal. It requires an **id** prop which should match the **id** of the target **Portal.Placeholder**.

#### Props:

- **id**: The identifier of the target portal.
- **children**: The content to be rendered into the portal.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request on GitHub.
