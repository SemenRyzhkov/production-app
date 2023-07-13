import { render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';

describe('Sidebar', () => {
  test('with one param', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
