# Study Components Project - AI Coding Assistant Instructions

## Project Overview
This is a component-based learning project focused on studying and implementing reusable UI/library components. The project serves as a learning environment for exploring component patterns, design systems, and modular architecture.

## Project Structure & Conventions

### Directory Organization
- `/components/` - Reusable UI components with individual folders per component
- `/examples/` - Usage examples and demonstrations for each component
- `/docs/` - Component documentation and learning notes
- `/tests/` - Unit and integration tests for components
- `/utils/` - Shared utility functions and helpers
- `/styles/` - Global styles, themes, and design tokens

### Component Architecture Pattern
```
components/
├── Button/
│   ├── index.js           # Main component export
│   ├── Button.jsx         # Component implementation
│   ├── Button.test.js     # Component tests
│   ├── Button.stories.js  # Storybook stories (if applicable)
│   └── styles.module.css  # Component-specific styles
```

### Naming Conventions
- **Components**: PascalCase (e.g., `Button`, `InputField`, `DataTable`)
- **Files**: Match component names for main files, camelCase for utilities
- **CSS Classes**: BEM methodology or CSS modules pattern
- **Props**: camelCase with descriptive names (e.g., `isDisabled`, `onClick`, `primaryColor`)

## Development Workflow

### Component Creation Process
1. Create component folder in `/components/[ComponentName]/`
2. Implement main component with prop validation
3. Create basic test file with render and interaction tests
4. Add usage example in `/examples/[ComponentName]/`
5. Document props, usage patterns, and variations

### Testing Strategy
- Use appropriate testing library for your chosen framework
- Focus on user behavior rather than implementation details
- Test accessibility features (ARIA attributes, keyboard navigation)
- Include visual regression tests for complex components

### Documentation Approach
- Each component should have inline prop documentation
- Include usage examples with common patterns
- Document accessibility considerations and keyboard shortcuts
- Maintain a component catalog/registry

## Technology Patterns

### State Management
- Prefer local component state for simple interactions
- Use context or props for cross-component communication
- Implement controlled/uncontrolled component patterns appropriately

### Styling Approach
- Use CSS modules or styled-components for component isolation
- Implement design token system for consistent theming
- Support dark/light mode through CSS custom properties
- Follow responsive design principles

### Accessibility Standards
- All interactive components must be keyboard accessible
- Implement proper ARIA labels and roles
- Ensure color contrast meets WCAG guidelines
- Test with screen readers

## Code Quality Standards

### Component Structure
```javascript
// Example component pattern (adapt to your framework)
const ComponentName = ({ 
  prop1, 
  prop2 = 'defaultValue',
  onAction,
  ...restProps 
}) => {
  // State management and lifecycle
  // Event handlers
  // Render logic
  
  return (
    <element {...restProps}>
      {/* Component template */}
    </element>
  );
};

// Add prop validation as appropriate for your framework
export default ComponentName;
```

### Error Handling
- Implement error boundaries for component isolation
- Provide meaningful error messages for development
- Use prop validation to catch common mistakes early
- Handle edge cases gracefully (empty data, loading states)

## Learning Objectives & Patterns

### Focus Areas
- **Component Composition**: Building complex UIs from simple, reusable parts
- **Props API Design**: Creating intuitive and flexible component interfaces
- **Performance Optimization**: Memoization, lazy loading, and render optimization
- **Design System Integration**: Consistent styling and behavior patterns

### Common Patterns to Study
- Compound components (e.g., Select with Option children)
- Render props and function-as-children patterns
- Composition over inheritance
- Component polymorphism (flexible component APIs)

## Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run component tests
npm run test

# Build for production
npm run build

# Run Storybook (if configured)
npm run storybook

# Lint and format code
npm run lint
npm run format
```

## Key Files to Reference
- `package.json` - Project dependencies and scripts
- `README.md` - Project setup and usage instructions
- `/docs/component-guidelines.md` - Detailed component creation guidelines
- `/examples/` - Working examples for reference and testing

## Notes for AI Assistants
- Prioritize component reusability and flexibility
- Always include accessibility considerations in component implementations
- Follow the established directory and naming conventions
- Include comprehensive prop documentation and examples
- Consider both beginner and advanced use cases when creating components
- Emphasize learning through practical implementation and experimentation