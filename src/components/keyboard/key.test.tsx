import { screen, render } from '@testing-library/react';
import { Key } from './key';

describe('Given the component Key', () => {
    const mockKey = 'test number 8';

    describe('given the component key', () => {
        test('Then it should render', () => {
            //Arrange & Act

            render(<Key item={mockKey} />);

            const labelInput = screen.getByText(/test/i);

            //Assert

            expect(labelInput).toBeInTheDocument();
        });
    });
});
