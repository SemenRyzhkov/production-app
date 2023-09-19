import { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { useDispatch, useSelector, useStore } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

export interface LoginFormProps {
  className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    store.reducerManager.add('loginForm', loginReducer);

    return () => {
      store.reducerManager.remove('loginForm');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && (
        <Text
          text={t('Вы ввели неправильный логин или парроль')}
          theme={TextTheme.ERROR}
        />
      )}
      <Input
        autoFocus
        placeholder={t('Введите логин')}
        className={cls.input}
        type='text'
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        placeholder={t('Введите пароль')}
        className={cls.input}
        type='text'
        onChange={onChangePassword}
        value={password}
      />
      <Button
        onClick={onLoginClick}
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});

export default LoginForm;
