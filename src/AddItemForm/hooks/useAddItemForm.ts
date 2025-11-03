import React, {ChangeEvent, useState, useCallback} from "react";

export const useAddItemForm = (onItemAdded: (title: string) => void) => {
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [error, setError] = useState<string | null>(null);

    const onNewTitleChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value);

        // Сбрасываем ошибку при изменении текста
        if (error) {
            setError(null);
        }
    }, [error]);

    const onKeyUpHandler = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask();
        }
    }, [newTaskTitle]);

    const addTask = useCallback(() => {
        const trimmedTitle = newTaskTitle.trim();

        if (trimmedTitle) {
            onItemAdded(trimmedTitle);
            setNewTaskTitle('');
        } else {
            setError('Title is required');
        }
    }, [newTaskTitle, onItemAdded]);

    const resetForm = useCallback(() => {
        setNewTaskTitle('');
        setError(null);
    }, []);

    return {
        newTaskTitle,
        error,
        onKeyUpHandler,
        onNewTitleChangeHandler,
        addTask,
        resetForm
    };
};